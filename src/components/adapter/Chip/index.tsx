import React, { FC, PropsWithChildren } from 'react';

import {
  Chip as ChipComponents,
  ChipProps as ChipPropsComponents,
} from 'src/components/chip';

type ChipProps = Omit<ChipPropsComponents, 'selected'> & {
  isActive?: boolean;
};

export const Chip: FC<PropsWithChildren<ChipProps>> = ({
  isActive,
  ...rest
}) => {
  return <ChipComponents {...rest} selected={isActive} />;
};
