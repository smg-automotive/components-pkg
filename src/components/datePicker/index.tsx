import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

export interface DatePickerProps
  extends Pick<InputProps, 'onFocus' | 'onBlur' | 'onChange'> {
  size?: 'md' | 'lg';
  min?: Date;
  value?: string;
  isInvalid?: boolean;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
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

