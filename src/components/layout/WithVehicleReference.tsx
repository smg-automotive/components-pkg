import React, { FC, PropsWithChildren, ReactNode } from 'react';

import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Box from '../box';
import TwoColumnsLayout from './TwoColumnsLayout';

interface Props {
  title?: string | ReactNode;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleReferenceProps;
  header?: ReactNode;
  callToAction?: ReactNode;
}

const LayoutWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  header,
  children,
  callToAction,
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
        content: <VehicleReference {...vehicle} callToAction={callToAction} />,
        columns: 4,
      }}
    />
  );
};

export default LayoutWithVehicleReference;
