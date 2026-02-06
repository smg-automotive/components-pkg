import React, { forwardRef } from 'react';

import { Input as InputComponents, InputProps } from 'src/components/input';

type Props = Omit<InputProps, 'disabled'> & {
  isDisabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { isDisabled, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <InputComponents {...rest} disabled={isDisabled} ref={ref} />;
});
