import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

export interface Props
  extends Pick<InputProps, 'onFocus' | 'onBlur' | 'onChange'> {
  size?: 'md' | 'lg';
  value?: string;
  isInvalid?: boolean;
}

const TimePicker = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <Input {...props} type="time" ref={ref} />;
});
TimePicker.displayName = 'TimePicker';

export default TimePicker;
export { Props as TimePickerProps };
