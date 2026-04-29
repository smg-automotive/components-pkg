import React, { FC, PropsWithChildren } from 'react';

import { Field, FieldProps } from '@/src/components/field';

type Props = Omit<FieldProps, 'required' | 'disabled'> & {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
};

export const FormControl: FC<PropsWithChildren<Props>> = ({
  id,
  label,
  isRequired,
  errorMessage,
  isDisabled,
  size,
  children,
  tooltip,
  hint,
}) => {
  return (
    <Field
      id={id}
      label={label}
      required={isRequired}
      errorMessage={errorMessage}
      disabled={isDisabled}
      size={size}
      tooltip={tooltip}
      hint={hint}
    >
      {children}
    </Field>
  );
};
