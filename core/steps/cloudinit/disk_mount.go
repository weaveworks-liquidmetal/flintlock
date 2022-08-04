package cloudinit

import (
	"context"
	"encoding/base64"
	"fmt"

	"github.com/sirupsen/logrus"
	"gopkg.in/yaml.v2"

	"github.com/weaveworks-liquidmetal/flintlock/client/cloudinit"
	"github.com/weaveworks-liquidmetal/flintlock/client/cloudinit/userdata"
	"github.com/weaveworks-liquidmetal/flintlock/core/models"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/log"
	"github.com/weaveworks-liquidmetal/flintlock/pkg/planner"
)

func NewDiskMountStep(vm *models.MicroVM) planner.Procedure {
	return &diskMountStep{
		vm: vm,
	}
}

type diskMountStep struct {
	vm *models.MicroVM
}

// Name is the name of the procedure/operation.
func (s *diskMountStep) Name() string {
	return "cloudinit_disk_mount"
}

func (s *diskMountStep) ShouldDo(ctx context.Context) (bool, error) {
	logger := log.GetLogger(ctx).WithFields(logrus.Fields{
		"step": s.Name(),
	})
	logger.Debug("checking if procedure should be run")

	return true, nil

}

// Do will perform the operation/procedure.
func (s *diskMountStep) Do(ctx context.Context) ([]planner.Procedure, error) {
	logger := log.GetLogger(ctx).WithFields(logrus.Fields{
		"step": s.Name(),
	})
	logger.Debug("running step to mount additional disks via cloud-init")

	vendorData := &userdata.UserData{}
	vendorDataRaw, ok := s.vm.Spec.Metadata.Items[cloudinit.VendorDataKey]
	if ok {
		data, err := base64.StdEncoding.DecodeString(vendorDataRaw)
		if err != nil {
			return nil, fmt.Errorf("decoding vendor data: %w", err)
		}
		if marshalErr := yaml.Unmarshal(data, vendorData); marshalErr != nil {
			return nil, fmt.Errorf("unmarshalling vendor-data yaml: %w", err)
		}
	}

	startingCode := int('b')
	for i, vol := range s.vm.Spec.AdditionalVolumes {
		if !vol.MountUsingCloudInit {
			continue
		}

		device := fmt.Sprintf("vd%c", rune(startingCode+i)) // Device number is always +1 as we have the root volume first
		mountPoint := fmt.Sprintf("/mnt/%s", vol.ID)

		if !vendorData.HasDeviceMount(device) {
			vendorData.Mounts = append(vendorData.Mounts, userdata.Mount{
				device,
				mountPoint,
			})
		}
	}
	vendorData.MountDefaultFields = userdata.Mount{"None", "None", "auto", "defaults,nofail", "0", "2"}

	data, err := yaml.Marshal(vendorData)
	if err != nil {
		return nil, fmt.Errorf("marshalling vendor-data to yaml: %w", err)
	}
	dataWithHeader := append([]byte("## template: jinja\n#cloud-config\n\n"), data...)

	if s.vm.Spec.Metadata.Items == nil {
		s.vm.Spec.Metadata.Items = map[string]string{}
	}
	s.vm.Spec.Metadata.Items[cloudinit.VendorDataKey] = base64.StdEncoding.EncodeToString(dataWithHeader)

	return nil, nil
}

func (s *diskMountStep) Verify(ctx context.Context) error {
	return nil
}
