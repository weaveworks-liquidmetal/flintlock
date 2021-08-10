package command

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sync"

	grpc_prometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/spf13/cobra"
	"google.golang.org/grpc"

	mvmv1 "github.com/weaveworks/reignite/api/services/microvm/v1alpha1"
	"github.com/weaveworks/reignite/pkg/defaults"
	"github.com/weaveworks/reignite/pkg/flags"
	"github.com/weaveworks/reignite/pkg/log"
	"github.com/weaveworks/reignite/pkg/server"
)

func newRunCommand(cfg *Config) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "run",
		Short: "Start running the reignite API",
		PreRunE: func(c *cobra.Command, _ []string) error {
			flags.BindCommandToViper(c)

			return nil
		},
		RunE: func(c *cobra.Command, _ []string) error {
			return runServer(c.Context(), cfg)
		},
	}

	addFlagsToCommand(cmd, cfg)

	return cmd
}

func addFlagsToCommand(cmd *cobra.Command, cfg *Config) {
	cmd.Flags().StringVar(&cfg.GRPCAPIEndpoint,
		"grpc-endpoint",
		defaults.GRPCAPIEndpoint,
		"The endpoint for the gRPC server to listen on.")
	cmd.Flags().StringVar(&cfg.HTTPAPIEndpoint,
		"http-endpoint",
		defaults.HTTPAPIEndpoint,
		"The endpoint for the HTTP proxy to the gRPC service to listen on.")
}

func runServer(ctx context.Context, cfg *Config) error {
	logger := log.GetLogger(ctx)
	logger.Info("reignited api server starting")

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, os.Interrupt)

	wg := &sync.WaitGroup{}
	ctx, cancel := context.WithCancel(log.WithLogger(ctx, logger))

	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := serveAPI(ctx, cfg); err != nil {
			logger.Errorf("failed serving api: %v", err)
		}
	}()

	// TODO: start the reconciler

	<-sigChan
	logger.Debug("shutdown signal received, waiting for work to finish")

	cancel()
	wg.Wait()

	logger.Info("all work finished, exiting")

	return nil
}

func serveAPI(ctx context.Context, cfg *Config) error {
	logger := log.GetLogger(ctx)
	mux := runtime.NewServeMux()

	// TODO: create the dependencies for the server

	grpcServer := grpc.NewServer(
		grpc.StreamInterceptor(grpc_prometheus.StreamServerInterceptor),
		grpc.UnaryInterceptor(grpc_prometheus.UnaryServerInterceptor),
	)
	mvmv1.RegisterMicroVMServer(grpcServer, server.NewServer())
	grpc_prometheus.Register(grpcServer)
	http.Handle("/metrics", promhttp.Handler())

	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	if err := mvmv1.RegisterMicroVMHandlerFromEndpoint(ctx, mux, cfg.GRPCAPIEndpoint, opts); err != nil {
		return fmt.Errorf("could not register microvm server: %w", err)
	}

	s := &http.Server{
		Addr:    cfg.HTTPAPIEndpoint,
		Handler: mux,
	}

	go func() {
		<-ctx.Done()
		logger.Infof("shutting down the http gateway server")
		if err := s.Shutdown(context.Background()); err != nil {
			logger.Errorf("failed to shutdown http gateway server: %v", err)
		}
		logger.Infof("shutting down grpc server")
		grpcServer.GracefulStop()
	}()

	logger.Debugf("starting grpc server listening on endpoint %s", cfg.GRPCAPIEndpoint)
	l, err := net.Listen("tcp", cfg.GRPCAPIEndpoint)
	if err != nil {
		return fmt.Errorf("setting up gRPC api listener: %w", err)
	}
	defer l.Close()
	go func() {
		if err := grpcServer.Serve(l); err != nil {
			logger.Fatalf("serving grpc api: %v", err) // TODO: remove this fatal
		}
	}()

	logger.Debugf("starting http server listening on endpoint %s", cfg.HTTPAPIEndpoint)
	if err := s.ListenAndServe(); err != nil {
		return fmt.Errorf("listening and serving http api: %w", err)
	}

	return nil
}