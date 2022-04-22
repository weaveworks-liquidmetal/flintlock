package run

import (
	"context"
	"errors"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sync"

	grpc_mw "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	grpc_prometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/spf13/cobra"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	mvmv1 "github.com/weaveworks-liquidmetal/flintlock/api/services/microvm/v1alpha1"
	"github.com/weaveworks-liquidmetal/flintlock/infrastructure/microvm"
	cmdflags "github.com/weaveworks-liquidmetal/flintlock/internal/command/flags"
	"github.com/weaveworks-liquidmetal/flintlock/internal/config"
	"github.com/weaveworks-liquidmetal/flintlock/internal/inject"
	"github.com/weaveworks-liquidmetal/flintlock/internal/version"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/auth"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/defaults"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/flags"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/log"
)

// NewCommand creates a new cobra command for running flintlock.
func NewCommand(cfg *config.Config) (*cobra.Command, error) {
	cmd := &cobra.Command{
		Use:   "run",
		Short: "Start running the flintlock API",
		PersistentPreRunE: func(c *cobra.Command, _ []string) error {
			flags.BindCommandToViper(c)

			logger := log.GetLogger(c.Context())
			logger.Infof(
				"flintlockd, version=%s, built_on=%s, commit=%s",
				version.Version,
				version.BuildDate,
				version.CommitHash,
			)

			if cfg.ParentIface == "" && cfg.BridgeName == "" {
				return errors.New("You must supply at least one of parent interface, bridge name")
			}

			return nil
		},
		RunE: func(c *cobra.Command, _ []string) error {
			return c.Help()
		},
	}

	//TODO: how should we handle these
	cmdflags.AddAuthFlagsToCommand(cmd, cfg)
	cmdflags.AddTLSFlagsToCommand(cmd, cfg)

	// Add persistent flags
	cmdflags.AddGRPCServerPersistentFlags(cmd, cfg)

	if err := cmdflags.AddContainerDPersistentFlags(cmd, cfg); err != nil {
		return nil, fmt.Errorf("adding containerd flags to run command: %w", err)
	}

	if err := cmdflags.AddNetworkPersistentFlags(cmd, cfg); err != nil {
		return nil, fmt.Errorf("adding network flags to run command: %w", err)
	}

	if err := cmdflags.AddHiddenPersistentFlags(cmd, cfg); err != nil {
		return nil, fmt.Errorf("adding hidden flags to run command: %w", err)
	}

	cmd.PersistentFlags().StringVar(&cfg.StateRootDir, "state-dir", defaults.StateRootDir, "The directory to use for the as the root for runtime state.")
	cmd.PersistentFlags().DurationVar(&cfg.ResyncPeriod, "resync-period", defaults.ResyncPeriod, "Reconcile the specs to resynchronise them based on this period.")
	cmd.PersistentFlags().DurationVar(&cfg.DeleteVMTimeout, "deleteMicroVM-timeout", defaults.DeleteVMTimeout, "The timeout for deleting a microvm.")

	for _, providerName := range microvm.GetProviderNames() {
		providerCmd, err := createProviderCommand(providerName, cfg)
		if err != nil {
			return nil, fmt.Errorf("creating command for %s provider: %w", providerName, err)
		}

		cmd.AddCommand(providerCmd)
	}

	return cmd, nil
}

func createProviderCommand(name string, cfg *config.Config) (*cobra.Command, error) {
	cmd := &cobra.Command{
		Use:   name,
		Short: fmt.Sprintf("Start running the flintlock API with %s", name),
		RunE: func(c *cobra.Command, _ []string) error {
			return runServer(c.Context(), name, cfg)
		},
	}

	if err := cmdflags.AddMicrovmServiceFlags(name, cmd, cfg); err != nil {
		return nil, fmt.Errorf("adding microvm service flags to run command: %w", err)
	}

	return cmd, nil
}

func runServer(ctx context.Context, providerName string, cfg *config.Config) error {
	logger := log.GetLogger(ctx)
	logger.Info("flintlockd grpc api server starting")

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, os.Interrupt)

	wg := &sync.WaitGroup{}
	ctx, cancel := context.WithCancel(log.WithLogger(ctx, logger))

	if !cfg.DisableAPI {
		wg.Add(1)

		go func() {
			defer wg.Done()

			if err := serveAPI(ctx, providerName, cfg); err != nil {
				logger.Errorf("failed serving api: %v", err)
			}
		}()
	}

	if !cfg.DisableReconcile {
		wg.Add(1)

		go func() {
			defer wg.Done()

			if err := runControllers(ctx, providerName, cfg); err != nil {
				logger.Errorf("failed running controllers: %v", err)
			}
		}()
	}

	<-sigChan
	logger.Debug("shutdown signal received, waiting for work to finish")

	cancel()
	wg.Wait()

	logger.Info("all work finished, exiting")

	return nil
}

func serveAPI(ctx context.Context, providerName string, cfg *config.Config) error {
	logger := log.GetLogger(ctx)

	if err := cfg.TLS.Validate(); err != nil {
		return fmt.Errorf("validating tls config: %w", err)
	}

	ports, err := inject.InitializePorts(providerName, cfg)
	if err != nil {
		return fmt.Errorf("initialising ports for application: %w", err)
	}

	app := inject.InitializeApp(cfg, ports)
	server := inject.InitializeGRPCServer(app)

	serverOpts, err := generateOpts(ctx, cfg)
	if err != nil {
		return err
	}

	grpcServer := grpc.NewServer(serverOpts...)

	mvmv1.RegisterMicroVMServer(grpcServer, server)
	grpc_prometheus.Register(grpcServer)
	http.Handle("/metrics", promhttp.Handler())

	go func() {
		<-ctx.Done()
		logger.Infof("shutting down grpc server")
		grpcServer.GracefulStop()
	}()

	logger.Debugf("starting grpc server listening on endpoint %s", cfg.GRPCAPIEndpoint)

	listener, err := net.Listen("tcp", cfg.GRPCAPIEndpoint)
	if err != nil {
		return fmt.Errorf("setting up gRPC api listener: %w", err)
	}
	defer listener.Close()

	reflection.Register(grpcServer)

	if err := grpcServer.Serve(listener); err != nil {
		logger.Fatalf("serving grpc api: %v", err) // TODO: remove this fatal #235
	}

	return nil
}

func runControllers(ctx context.Context, providerName string, cfg *config.Config) error {
	logger := log.GetLogger(ctx)

	ports, err := inject.InitializePorts(providerName, cfg)
	if err != nil {
		return fmt.Errorf("initialising ports for controller: %w", err)
	}

	app := inject.InitializeApp(cfg, ports)
	mvmControllers := inject.InializeController(app, ports)

	logger.Info("starting microvm controller")

	if err := mvmControllers.Run(ctx, 1, cfg.ResyncPeriod, true); err != nil {
		logger.Fatalf("starting microvm controller: %v", err)
	}

	return nil
}

func generateOpts(ctx context.Context, cfg *config.Config) ([]grpc.ServerOption, error) {
	logger := log.GetLogger(ctx)

	opts := []grpc.ServerOption{
		grpc.StreamInterceptor(grpc_prometheus.StreamServerInterceptor),
		grpc.UnaryInterceptor(grpc_prometheus.UnaryServerInterceptor),
	}

	if cfg.BasicAuthToken != "" {
		logger.Info("basic authentication is enabled")

		opts = []grpc.ServerOption{
			grpc.StreamInterceptor(grpc_mw.ChainStreamServer(
				grpc_prometheus.StreamServerInterceptor,
				grpc_auth.StreamServerInterceptor(auth.BasicAuthFunc(cfg.BasicAuthToken)),
			)),
			grpc.UnaryInterceptor(grpc_mw.ChainUnaryServer(
				grpc_prometheus.UnaryServerInterceptor,
				grpc_auth.UnaryServerInterceptor(auth.BasicAuthFunc(cfg.BasicAuthToken)),
			)),
		}
	} else {
		logger.Warn("basic authentication is DISABLED")
	}

	if !cfg.TLS.Insecure {
		logger.Info("TLS is enabled")

		creds, err := auth.LoadTLSForGRPC(&cfg.TLS)
		if err != nil {
			return nil, err
		}

		opts = append(opts, grpc.Creds(creds))
	} else {
		logger.Warn("TLS is DISABLED")
	}

	return opts, nil
}
