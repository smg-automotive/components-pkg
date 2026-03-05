import React, { forwardRef } from 'react';

import {
  Button as ButtonComponents,
  UnifiedButtonProps,
} from 'src/components/button';

type Props = Omit<UnifiedButtonProps, 'disabled'> & {
  isDisabled?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isDisabled, disabled, isLoading, ...rest } = props;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ButtonComponents
      {...rest}
      disabled={isDisabled ?? disabled}
      loading={isLoading}
      ref={ref}
    />
  );
});
