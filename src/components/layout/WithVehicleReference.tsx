import React, { FC, ReactNode } from 'react';

import TwoColumsLayout from './TwoColumnsLayout';
import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Stack from '../stack';

interface Props {
  title?: string;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleReferenceProps;
  header: ReactNode;
  leftContent: ReactNode;
}

const LayoutWithVehicleReference: FC<Props> = ({
  title,
  backLink,
  vehicle,
  header,
  leftContent,
}) => {
  return (
    <TwoColumsLayout
      header={header}
      backLink={backLink}
      title={title}
      rightContent={<VehicleReference {...vehicle} />}
      leftContent={
        <Stack direction="column" spacing="2xl">
          {leftContent}
        </Stack>
      }
    />
  );
};

export default LayoutWithVehicleReference;
