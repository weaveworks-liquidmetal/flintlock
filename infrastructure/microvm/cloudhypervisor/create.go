package cloudhypervisor

import (
	"bytes"
	"context"
	"fmt"
	"os"
	"os/exec"
	"syscall"

	"github.com/sirupsen/logrus"
	"github.com/spf13/afero"

	cerrors "github.com/weaveworks-liquidmetal/flintlock/core/errors"
	"github.com/weaveworks-liquidmetal/flintlock/core/models"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/defaults"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/log"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/process"
)

// Create will create a new microvm.
func (p *provider) Create(ctx context.Context, vm *models.MicroVM) error {
	logger := log.GetLogger(ctx).WithFields(logrus.Fields{
		"service": "cloudhypervisor_microvm",
		"vmid":    vm.ID.String(),
	})
	logger.Debugf("creating microvm")

	vmState := NewState(vm.ID, p.config.StateRoot, p.fs)

	if err := p.ensureState(vmState); err != nil {
		return fmt.Errorf("ensuring state dir: %w", err)
	}

	if err := p.createCloudInitImage(vm, vmState); err != nil {
		return fmt.Errorf("creating metadata image: %w", err)
	}

	proc, err := p.startCloudHypervisor(ctx, vm, vmState, p.config.RunDetached)
	if err != nil {
		return fmt.Errorf("starting firecracker process: %w", err)
	}

	if err = vmState.SetPid(proc.Pid); err != nil {
		return fmt.Errorf("saving pid %d to file: %w", proc.Pid, err)
	}

	return nil
}

func (p *provider) startCloudHypervisor(ctx context.Context, vm *models.MicroVM, state State, detached bool) (*os.Process, error) {
	args, err := p.buildArgs(vm, state)
	if err != nil {
		return nil, err
	}

	cmd := exec.Command(p.config.CloudHypervisorBin, args...)

	stdOutFile, err := p.fs.OpenFile(state.StdoutPath(), os.O_WRONLY|os.O_CREATE|os.O_APPEND, defaults.DataFilePerm)
	if err != nil {
		return nil, fmt.Errorf("opening stdout file %s: %w", state.StdoutPath(), err)
	}

	stdErrFile, err := p.fs.OpenFile(state.StderrPath(), os.O_WRONLY|os.O_CREATE|os.O_APPEND, defaults.DataFilePerm)
	if err != nil {
		return nil, fmt.Errorf("opening sterr file %s: %w", state.StderrPath(), err)
	}

	cmd.Stderr = stdErrFile
	cmd.Stdout = stdOutFile
	cmd.Stdin = &bytes.Buffer{}

	fmt.Printf("%s %s\n", cmd.Path, cmd.Args)

	var startErr error
	if detached {
		startErr = process.DetachedStart(cmd)
	} else {
		startErr = cmd.Start()
	}

	if startErr != nil {
		return nil, fmt.Errorf("starting cloud hypervisor process: %w", err)
	}

	return cmd.Process, nil
}

func (p *provider) buildArgs(vm *models.MicroVM, state State) ([]string, error) {
	// This works:
	// --api-socket /var/lib/flintlock/vm/default/hardcore_carver6/01G16F6FJMMZ96E7760F5SH9AM/cloudhypervisor.sock
	// --kernel /home/richard/code/ww/image-builder/flintlock/kernel/linux-cloud-hypervisor/arch/x86/boot/compressed/vmlinux.bin
	// --disk path=/dev/mapper/flintlock-thinpool-snap-659
	// --cpus boot=4
	// --memory size=2048M
	// --net "tap=,mac=,ip=,mask="
	// --cmdline  "console=hvc0 root=/dev/vda rw" -v
	args := []string{
		"--api-socket",
		state.SockPath(),
		"--log-file",
		state.LogPath(),
		"-v",
		// Testing tty
		//"--console",
		//"pty",
		//"--serial",
		//"tty",
		//"--platform",
		//fmt.Sprintf("serial_number=%s", vm.ID.UID()),
	}

	// Kernel and cmdline args
	kernelCmdLine := DefaultKernelCmdLine()

	for key, value := range vm.Spec.Kernel.CmdLine {
		kernelCmdLine.Set(key, value)
	}

	//args = append(args, "--cmdline", fmt.Sprintf("\"%s\"", kernelCmdLine.String()))
	args = append(args, "--cmdline", kernelCmdLine.String())
	args = append(args, "--kernel", fmt.Sprintf("%s/%s", vm.Status.KernelMount.Source, vm.Spec.Kernel.Filename))

	// CPU and memory
	args = append(args, "--cpus", fmt.Sprintf("boot=%d", vm.Spec.VCPU))
	args = append(args, "--memory", fmt.Sprintf("size=%dM", vm.Spec.MemoryInMb))

	// Volumes (root, additional, metadata)
	rootVolumeStatus, volumeStatusFound := vm.Status.Volumes[vm.Spec.RootVolume.ID]
	if !volumeStatusFound {
		return nil, cerrors.NewVolumeNotMounted(vm.Spec.RootVolume.ID)
	}
	args = append(args, "--disk", fmt.Sprintf("path=%s", rootVolumeStatus.Mount.Source))
	args = append(args, fmt.Sprintf("path=%s,readonly=on", state.CloudInitImage()))

	for _, vol := range vm.Spec.AdditionalVolumes {
		status, ok := vm.Status.Volumes[vol.ID]
		if !ok {
			return nil, cerrors.NewVolumeNotMounted(vol.ID)
		}
		args = append(args, fmt.Sprintf("path=%s", status.Mount.Source))
	}

	// Network interfaces
	for i := range vm.Spec.NetworkInterfaces {
		iface := vm.Spec.NetworkInterfaces[i]

		status, ok := vm.Status.NetworkInterfaces[iface.GuestDeviceName]
		if !ok {
			return nil, cerrors.NewNetworkInterfaceStatusMissing(iface.GuestDeviceName)
		}

		args = append(args, "--net")
		if iface.Type == models.IfaceTypeMacvtap {
			arg, err := p.createMacvtapArg(&iface, status)
			if err != nil {
				return nil, fmt.Errorf("creating macvtap interface: %w", err)
			}
			args = append(args, arg)
		} else if iface.Type == models.IfaceTypeTap {
			args = append(args, fmt.Sprintf("tap=%s,mac=%s", status.HostDeviceName, iface.GuestMAC))
		}
	}

	return args, nil
}

func (p *provider) createMacvtapArg(netInt *models.NetworkInterface, status *models.NetworkInterfaceStatus) (string, error) {
	hostDevName := fmt.Sprintf("/dev/tap%d", status.Index)
	fd, err := syscall.Open(hostDevName, syscall.O_RDWR, 755)
	if err != nil {
		return "", fmt.Errorf("getting file description for %s: %w", hostDevName, err)
	}

	arg := fmt.Sprintf("fd=%d,mac=", fd)
	if netInt.GuestMAC != "" {
		arg = arg + netInt.GuestMAC
	}

	return arg, nil
}

func (p *provider) ensureState(vmState State) error {
	exists, err := afero.DirExists(p.fs, vmState.Root())
	if err != nil {
		return fmt.Errorf("checking if state dir %s exists: %w", vmState.Root(), err)
	}

	if !exists {
		if err = p.fs.MkdirAll(vmState.Root(), defaults.DataDirPerm); err != nil {
			return fmt.Errorf("creating state directory %s: %w", vmState.Root(), err)
		}
	}

	sockExists, err := afero.Exists(p.fs, vmState.SockPath())
	if err != nil {
		return fmt.Errorf("checking if sock dir exists: %w", err)
	}

	if sockExists {
		if delErr := p.fs.Remove(vmState.SockPath()); delErr != nil {
			return fmt.Errorf("deleting existing sock file: %w", err)
		}
	}

	logFile, err := p.fs.OpenFile(vmState.LogPath(), os.O_WRONLY|os.O_CREATE|os.O_APPEND, defaults.DataFilePerm)
	if err != nil {
		return fmt.Errorf("opening log file %s: %w", vmState.LogPath(), err)
	}

	logFile.Close()

	// metadataDirExists, err := afero.DirExists(p.fs, vmState.MetadataDir())
	// if err != nil {
	// 	return fmt.Errorf("checking if metadata dir exists: %w", err)
	// }

	// if !metadataDirExists {
	// 	if err = p.fs.MkdirAll(vmState.MetadataDir(), defaults.DataDirPerm); err != nil {
	// 		return fmt.Errorf("creating metadata directory %s: %w", vmState.MetadataDir(), err)
	// 	}
	// }

	return nil
}
