import React, { forwardRef, ReactNode } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

import Flex from '../flex';
import { CheckboxProps } from '../checkbox';

export interface CollapsibleCheckboxProps extends CheckboxProps {
  icon?: ReactNode;
}

const CollapsibleCheckbox = forwardRef<
  HTMLInputElement,
  CollapsibleCheckboxProps
>(
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
      variant = 'alignCenter',
      readOnly = false,
      fullWidth = false,
      icon,
      ...props
    },
    ref,
  ) => (
    <Flex alignItems="center">
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
        readOnly={readOnly}
        width={fullWidth ? 'full' : undefined}
      >
        {label}
      </ChakraCheckbox>
      {icon}
    </Flex>
  ),
);
CollapsibleCheckbox.displayName = 'CollapsibleCheckbox';

export default CollapsibleCheckbox;
