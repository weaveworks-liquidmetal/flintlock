package auth

import (
	"crypto/tls"
	"crypto/x509"
	"errors"
	"fmt"
	"os"

	"google.golang.org/grpc/credentials"

	"github.com/liquidmetal-dev/flintlock/internal/config"
)

// LoadTLSForGRPC will process TLS config and return TLS credentials for the gRPC server.
// If ClientCAFile and ValidateClient are set, then the server will be configured
// for mutual TLS.
func LoadTLSForGRPC(tlsCfg *config.TLSConfig) (credentials.TransportCredentials, error) {
	serverCert, err := tls.LoadX509KeyPair(tlsCfg.CertFile, tlsCfg.KeyFile)
	if err != nil {
		return nil, fmt.Errorf("reading tls key pair: %w", err)
	}

	grpcTLS := &tls.Config{
		Certificates: []tls.Certificate{serverCert},
		MinVersion:   tls.VersionTLS13,
	}

	if tlsCfg.ClientCAFile != "" {
		caCert, err := os.ReadFile(tlsCfg.ClientCAFile)
		if err != nil {
			return nil, fmt.Errorf("reading CA cert file %s: %w", tlsCfg.ClientCAFile, err)
		}

		pool := x509.NewCertPool()
		if !pool.AppendCertsFromPEM(caCert) {
			return nil, errors.New("could not append CACert to cert pool")
		}

		grpcTLS.ClientCAs = pool
	}

	if tlsCfg.ValidateClient {
		grpcTLS.ClientAuth = tls.RequireAndVerifyClientCert
	}

	return credentials.NewTLS(grpcTLS), nil
}
