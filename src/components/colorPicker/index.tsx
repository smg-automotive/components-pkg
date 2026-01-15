import React, { forwardRef } from 'react';
import { Field, Input, InputProps } from '@chakra-ui/react';

interface ColorPickerProps extends Omit<InputProps, 'disabled' | '_invalid'> {
  isInvalid?: boolean;
  isDisabled?: boolean;
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      width = 'md',
      height = 'md',
      padding = '0',
      backgroundColor = 'whiteAlpha.100',
      isInvalid,
      isDisabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <Field.Root invalid={isInvalid}>
        <Input
          {...rest}
          ref={ref}
          type="color"
          width={width}
          height={height}
          padding={padding}
          backgroundColor={backgroundColor}
          cursor="pointer"
          disabled={isDisabled}
          _invalid={{ borderColor: 'red.500' }}
        />
      </Field.Root>
    );
  },
);

ColorPicker.displayName = 'ColorPicker';
