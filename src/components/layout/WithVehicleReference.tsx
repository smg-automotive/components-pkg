import React, { FC, PropsWithChildren, ReactNode } from 'react';

import TwoColumsLayout from './TwoColumnsLayout';
import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Box from '../box';

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
      rightContentColumns={4}
      leftContent={<Box marginRight={{ md: '2xl' }}>{children}</Box>}
      leftContentColumns={8}
    />
  );
};

export default LayoutWithVehicleReference;
