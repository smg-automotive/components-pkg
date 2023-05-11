import React, { FC, PropsWithChildren, ReactNode } from 'react';

import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Box from '../box';
import TwoColumnsLayout, { ColumnSize } from './TwoColumnsLayout';

interface Props {
  title?: string | ReactNode;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleReferenceProps;
  header?: ReactNode;
  leftColumnSize?: ColumnSize;
  rightColumnSize?: ColumnSize;
}

const LayoutWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  header,
  children,
  leftColumnSize = 8,
  rightColumnSize = 4,
}) => {
  const contentMargin = { md: '2xl' };

  return (
    <TwoColumnsLayout
      header={header}
      backLink={backLink}
      title={title ? <Box marginRight={contentMargin}>{title}</Box> : null}
      left={{
        content: <Box marginRight={contentMargin}>{children}</Box>,
        columns: leftColumnSize,
      }}
      right={{
        content: <VehicleReference {...vehicle} />,
        columns: rightColumnSize,
      }}
    />
  );
};

export default LayoutWithVehicleReference;
