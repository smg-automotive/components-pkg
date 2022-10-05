import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: 'md' | 'lg';
  min?: Date;
};

const DatePicker: FC<Props> = ({
  onBlur,
  onFocus,
  onChange,
  min,
  ...props
}) => {
  return (
    <Input
      {...props}
      type="date"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      min={
        min
          ? min.toLocaleDateString('en-ca')
          : new Date().toLocaleDateString('en-ca')
      }
    />
  );
};

export default DatePicker;
export { Props as DatePickerProps };
