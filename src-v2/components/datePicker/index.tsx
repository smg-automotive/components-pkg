import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

export interface Props
  extends Pick<InputProps, 'onFocus' | 'onBlur' | 'onChange'> {
  size?: 'md' | 'lg';
  min?: Date;
  value?: string;
  isInvalid?: boolean;
}

const DatePicker = forwardRef<HTMLInputElement, Props>(
  ({ min, ...props }, ref) => {
    return (
      <Input
        {...props}
        type="date"
        min={min ? min.toISOString().split('T')[0] : undefined}
        ref={ref}
      />
    );
  },
);
DatePicker.displayName = 'DatePicker';

export default DatePicker;
export { Props as DatePickerProps };
