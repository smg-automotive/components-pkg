import React, { FC, PropsWithChildren, ReactNode } from 'react';

import TwoColumnsLayout from './TwoColumnsLayout';
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
  const contentMargin = { md: '2xl' };

  return (
    <TwoColumnsLayout
      header={header}
      backLink={backLink}
      title={title ? <Box marginRight={contentMargin}>{title}</Box> : null}
      left={{
        content: <Box marginRight={contentMargin}>{children}</Box>,
        columns: 8,
      }}
      right={{
        content: <VehicleReference {...vehicle} />,
        columns: 4,
      }}
    />
  );
};

export default LayoutWithVehicleReference;
