import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '~shared/ui';
import { VehicleItem } from '~entities/shared/vehicles/model';

export interface VehiclesSelectorProps extends SelectProps {
  value?: string;
  vehiclesList: VehicleItem[] | null;
}

export const VehiclesSelector: FC<VehiclesSelectorProps> = ({ value, vehiclesList, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={value}
      options={vehiclesList?.map((item) => {
        return {
          value: item.id,
          label: item.vehicle_name,
        };
      })}
      {...props}
    />
  );
};
