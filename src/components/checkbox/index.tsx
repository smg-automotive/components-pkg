import React, { ChangeEvent, forwardRef, ReactNode } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

export interface CheckboxProps {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode | string;
  isInvalid?: boolean;
  isIndeterminate?: boolean;
  size?: 'sm' | 'lg';
  fontWeight?: 'regular' | 'bold';
  variant?: 'allignCenter' | 'allignTop';
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
      size = 'lg',
      fontWeight = 'regular',
      variant = 'allignCenter',
      ...props
    },
    ref
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
      size={size}
      fontWeight={fontWeight}
      variant={variant}
    >
      {label}
    </ChakraCheckbox>
  )
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
