import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

const ColorPicker = forwardRef<HTMLInputElement, InputProps>(
  ({ width = '36px', padding = '0', ...props }, ref) => {
    return (
      <Input
        {...props}
        type="color"
        ref={ref}
        width={width}
        padding={padding}
        cursor="pointer"
      />
    );
  },
);

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
