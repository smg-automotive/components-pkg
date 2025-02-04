import React, { FC, PropsWithChildren } from 'react';

import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Box from '../box';
import TwoColumnsLayout, {
  ColumnSize,
  TwoColumnsLayoutProps,
} from './TwoColumnsLayout';
export interface Props extends Omit<TwoColumnsLayoutProps, 'left' | 'right'> {
  vehicle: VehicleReferenceProps;
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
  maxContentWidth = 'lg',
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
      maxContentWidth={maxContentWidth}
    />
  );
};

export default LayoutWithVehicleReference;
