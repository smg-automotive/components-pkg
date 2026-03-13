import React, { FC, PropsWithChildren } from 'react';

import { Field, FieldProps } from 'src/components/field';

type Props = Omit<FieldProps, 'required' | 'disabled'> & {
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const FormControl: FC<PropsWithChildren<Props>> = ({
  id,
  label,
  isRequired,
  errorMessage,
  isDisabled,
  size,
  children,
}) => {
  return (
    <Field
      id={id}
      label={label}
      required={isRequired}
      errorMessage={errorMessage}
      disabled={isDisabled}
      size={size}
    >
      {children}
    </Field>
  );
};
