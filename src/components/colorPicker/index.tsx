import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

const ColorPicker = forwardRef<
  HTMLInputElement,
  Pick<
    InputProps,
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'name'
    | 'value'
    | 'isInvalid'
    | 'isDisabled'
    | 'border'
    | 'borderRadius'
  >
>((props, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      type="color"
      width="36px"
      padding="0"
      cursor="pointer"
    />
  );
});

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
