import React, { FC, PropsWithChildren } from 'react';

import {
  Chip as ChipComponents,
  ChipProps as ChipPropsComponents,
} from '@/src/components/chip';

type ChipProps = Omit<ChipPropsComponents, 'selected' | 'disabled'> & {
  isActive?: boolean;
  isDisabled?: boolean;
};

export const Chip: FC<PropsWithChildren<ChipProps>> = ({
  isActive,
  isDisabled = false,
  ...rest
}) => {
  return <ChipComponents {...rest} selected={isActive} disabled={isDisabled} />;
};
