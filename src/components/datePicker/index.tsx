import React, { FC } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

type Props = {
  size?: 'md' | 'lg';
  min?: Date;
  value?: string;
} & Pick<InputProps, 'onFocus' | 'onBlur' | 'onChange'>;

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
