import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FocusEvent,
  FocusEventHandler,
  useRef,
} from 'react';
import { css } from '@emotion/react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { space } from '../../themes/shared/space';

import DatePickerIcon from '../../assets/images/icons/datepicker-icon.svg';

const minimumDateRegex = new RegExp(/^\d{4}-\d{2}-\d{2}$/); // yyyy-mm-dd

type Props = {
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  size?: 'md' | 'lg';
  min?: typeof minimumDateRegex;
};

const getToday = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formatToday = `${year}-${month}-${day}`;

  return formatToday;
};

const DatePicker: FC<Props> = ({
  placeholder,
  onBlur,
  onFocus,
  onChange,
  value,
  min,
  ...props
}) => {
  const minimumDateSelected = min || getToday();
  const inputRef = useRef(null);

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

  // WORK IN PROGRESS
  const handleOnClick = () => {
    const event = new Event('input', { bubbles: true });
    inputRef.current.dispatchEvent(event);
    console.log('REFFFF', inputRef.current);
  };

  return (
    <InputGroup>
      <Input
        {...props}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
        onFocus={(e) => handleOnFocus(e)}
        onBlur={(e) => handleOnBlur(e)}
        value={value}
        css={css`
          ::-webkit-calendar-picker-indicator {
            opacity: 0;
            z-index: 99;
          }
        `}
        min={minimumDateSelected}
      />
      <InputRightElement height="100%" marginRight={space.xs}>
        <IconButton
          icon={<img src={DatePickerIcon} alt="Date-picker icon" />}
          aria-label="Date picker"
          onClick={() => handleOnClick()}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default DatePicker;
export { Props as DatePickerProps };
