import React, { forwardRef } from 'react';

import {
  Select as SelectComponents,
  SelectProps,
} from '@/src/components/select';

type Props = Omit<SelectProps, 'disabled'> & {
  isDisabled?: boolean;
  isInvalid?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { isDisabled, isInvalid, ...rest } = props;
  return (
    <SelectComponents
      {...({
        ...rest,
        disabled: isDisabled,
        invalid: isInvalid,
      } as SelectProps)}
      ref={ref}
    />
  );
});
