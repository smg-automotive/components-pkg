import React, { forwardRef } from 'react';
import { Field, Input, InputProps } from '@chakra-ui/react';

interface ColorPickerProps extends InputProps {
  invalid?: boolean;
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      width = 'md',
      height = 'md',
      padding = '0',
      backgroundColor = 'whiteAlpha.100',
      invalid,
      ...rest
    },
    ref,
  ) => {
    return (
      <Field.Root invalid={invalid}>
        <Input
          {...rest}
          ref={ref}
          type="color"
          width={width}
          height={height}
          padding={padding}
          backgroundColor={backgroundColor}
          cursor="pointer"
          _invalid={{ borderColor: 'red.500' }}
        />
      </Field.Root>
    );
  },
);

ColorPicker.displayName = 'ColorPicker';
