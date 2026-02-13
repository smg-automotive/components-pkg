import React, { forwardRef } from 'react';

import { Input as InputComponents, InputProps } from 'src/components/input';

type AdapterType<T> = T extends unknown
  ? Omit<T, 'disabled' | 'readOnly'> & {
      isDisabled?: boolean;
      isReadOnly?: boolean;
      textColor?: InputProps['color'];
    }
  : never;

type Props = AdapterType<InputProps>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { isDisabled, isReadOnly, textColor, ...rest } = props;

  return (
    <InputComponents
      color={textColor}
      {...(isReadOnly ? { readOnly: true } : {})}
      disabled={isDisabled}
      ref={ref}
      {...rest}
    />
  );
});
