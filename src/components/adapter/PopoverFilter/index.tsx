import React from 'react';

import { PopoverFilterProps } from 'src/components/filterPatterns/popover/props';
import { PopoverFilter as PopoverFilterComponents } from 'src/components/filterPatterns/popover';

type Props = PopoverFilterProps & {
  isDisabled?: boolean;
};

export const PopoverFilter: React.FC<Props> = ({
  isDisabled = false,
  ...rest
}) => {
  return <PopoverFilterComponents {...rest} disabled={isDisabled} />;
};
