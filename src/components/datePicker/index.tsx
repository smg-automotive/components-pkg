import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FocusEvent,
  FocusEventHandler,
} from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// import { space } from '../../themes/shared/space';

// import DatePickerIcon from '../../assets/images/icons/datepicker-icon.svg';

type Props = {
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  size?: 'md' | 'lg';
};

const DatePicker: FC<Props> = ({
  placeholder,
  onBlur,
  onFocus,
  onChange,
  value,
  ...props
}) => {
  const handleOnFocus = (event: FocusEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) target.type = 'date';
    onFocus && onFocus;
  };

  const handleOnBlur = (event: FocusEvent) => {
    const target = event.target as HTMLInputElement;
    if (target && !target.value) target.type = 'text';
    onBlur && onBlur;
  };

  const handleOnChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (!target.value) target.type = 'text';
    onChange && onChange;
  };

  return (
    <InputGroup>
      <Input
        {...props}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
        onFocus={(e) => handleOnFocus(e)}
        onBlur={(e) => handleOnBlur(e)}
        value={value}
      />
      {/* <InputRightElement height="100%" marginRight={space.xs}>
        <img src={DatePickerIcon} alt="Date-picker icon" />
      </InputRightElement> */}
    </InputGroup>
  );
};

export default DatePicker;
export { Props as DatePickerProps };
