import React, { FC, PropsWithChildren, ReactNode } from 'react';

import TwoColumsLayout from './TwoColumnsLayout';
import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Stack from '../stack';

interface Props {
  title?: string | ReactNode;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleReferenceProps;
  header: ReactNode;
}

const LayoutWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  header,
  children,
}) => {
  return (
    <TwoColumsLayout
      header={header}
      backLink={backLink}
      title={title}
      rightContent={<VehicleReference {...vehicle} />}
      leftContent={
        <Stack direction="column" spacing="2xl">
          {children}
        </Stack>
      }
    />
  );
};

export default LayoutWithVehicleReference;
