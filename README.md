
# Flintlock - Create and manage the lifecycle of MicroVMs, backed by containerd.

[![GitHub](https://img.shields.io/github/license/weaveworks/flintlock)](https://img.shields.io/github/license/weaveworks/flintlock)
[![codecov](https://codecov.io/gh/weaveworks/flintlock/branch/main/graph/badge.svg?token=ZNPNRDI8Z0)](https://codecov.io/gh/weaveworks/flintlock)
[![Go Report Card](https://goreportcard.com/badge/github.com/weaveworks-liquidmetal/flintlock)](https://goreportcard.com/report/github.com/weaveworks-liquidmetal/flintlock)

## What is flintlock?

Flintlock is a service for creating and managing the lifecycle of microVMs on a host machine. We support [Firecracker](https://firecracker-microvm.github.io/) and [Cloud Hypervisor](https://www.cloudhypervisor.org/) (experimental).

The original use case for flintlock was to create microVMs on a bare-metal host where the microVMs will be used as nodes in a virtualized Kubernetes cluster. It is an essential part of [Liquid Metal](https://www.weave.works/blog/multi-cluster-kubernetes-on-microvms-for-bare-metal) and can be orchestrated by [Cluster API Provider Microvm](https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm).

However, its useful for many other use cases where lightweight virtualization is required (e.g. isolated workloads, pipelines).

## Features

Using API requests (via gRPC or HTTP):

- Create and delete microVMs
- Manage the lifecycle of microVMs (i.e. start, stop, pause)
- Configure microVM metadata via cloud-init, ignition etc
- Use OCI images for microVM volumes, kernel and initrd
- Expose microVM metrics for collection by Prometheus
- (coming soon) Use CNI to configure the network for the microVMs

## Documentation

See our [getting started with flintlock][quickstart] tutorial.

## Contributing

Contributions are welcome. Please read the [CONTRIBUTING.md][contrib] and our [Code Of Conduct][coc]. 

You can reach out to the maintainers and other contributors using the [#liquid-metal](https://weave-community.slack.com/archives/C02KARWGR7S) slack channel.

Other interesting resources include:

- [The issue tracker][issues]
- [The list of milestones][milestones]
- [Architectural Decision Records (ADR)][adr]
- [Getting started with flintlock][quickstart]

## Getting Help

If you have any questions about, feedback for or problems with flintlock:

- [File an issue](CONTRIBUTING.md#opening-issues).

Your feedback is always welcome!

## Compatibility

The table below shows you which versions of Firecracker are compatible with Flintlock:

| Flintlock         | Firecracker                      | Cloud Hypervisor  |
| ----------------- | -------------------------------- | ----------------- |
|    v0.5.0         | Official v1.0+ or v1.0.0-macvtap | v26.0             |
|    v0.4.0         | Official v1.0+ or v1.0.0-macvtap | **Not Supported** |
|    v0.3.0         | Official v1.0+ or v1.0.0-macvtap | **Not Supported** |
| <= v0.2.0         | <= v0.25.2-macvtap               | **Not Supported** |
| <= v0.1.0-alpha.6 | <= v0.25.2-macvtap               | **Not Supported** |
|    v0.1.0-alpha.7 | **Do not use**                   | **Not Supported** |
|    v0.1.0-alpha.8 | <= v0.25.2-macvtap               | **Not Supported** |

> Note: Flintlock currently requires a custom build of Firecracker if you plan to use `macvtap` available [here][fc-fork].

## License

[MPL-2.0 License][license]

[quickstart]: https://weaveworks-liquidmetal.github.io/flintlock/docs/category/getting-started/
[contrib]: ./CONTRIBUTING.md
[coc]: ./CODE_OF_CONDUCT.md
[issues]: https://github.com/weaveworks-liquidmetal/flintlock/issues
[milestones]: https://github.com/weaveworks-liquidmetal/flintlock/milestones
[adr]: ./docs/adr
[license]: ./LICENSE
[fc-fork]: https://github.com/weaveworks/firecracker/releases
