import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: 'md' | 'lg';
  min?: Date;
  value?: string;
};

const DatePicker: FC<Props> = ({ min, ...props }) => {
  return (
    <Input
      {...props}
      type="date"
      min={min ? min.toISOString().split('T')[0] : undefined}
    />
  );
};

export default DatePicker;
export { Props as DatePickerProps };
