import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

export interface Props
  extends Pick<
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
  > {
  size?: 'md' | 'sm';
}

const sizeMap: Record<'sm' | 'md', string> = {
  sm: '36px',
  md: '100%',
};

const ColorPicker = forwardRef<HTMLInputElement, Props>(
  ({ size = 'md', border, borderRadius, ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        type="color"
        width={sizeMap[size]}
        padding="0"
        cursor="pointer"
        border={border}
        borderRadius={borderRadius}
      />
    );
  },
);

ColorPicker.displayName = 'ColorPicker';
export default ColorPicker;
export { Props as ColorPickerProps };
