import React, { ChangeEvent, forwardRef, ReactNode } from 'react';
import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from '@chakra-ui/react';

export interface CheckboxProps {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode | string;
  isInvalid?: boolean;
  isIndeterminate?: boolean;
  fontWeight?: 'regular' | 'bold';
  variant?: 'alignCenter' | 'alignTop' | 'alignTopForSmallSize';
  paddingY?: ChakraCheckboxProps['paddingY'];
  readOnly?: boolean;
  fullWidth?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      value,
      isDisabled = false,
      isChecked = false,
      onChange,
      label,
      isInvalid,
      isIndeterminate = false,
      fontWeight = 'regular',
      variant = 'alignCenter',
      readOnly = false,
      fullWidth = false,
      ...props
    },
    ref,
  ) => (
    <ChakraCheckbox
      {...props}
      ref={ref}
      name={name}
      value={value}
      isDisabled={isDisabled}
      isChecked={isChecked}
      onChange={onChange}
      isInvalid={isInvalid}
      isIndeterminate={isIndeterminate}
      fontWeight={fontWeight}
      variant={variant}
      readOnly={readOnly}
      width={fullWidth ? 'full' : undefined}
    >
      {label}
    </ChakraCheckbox>
  ),
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
