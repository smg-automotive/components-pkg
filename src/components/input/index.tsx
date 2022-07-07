import { useDebouncedCallback } from 'use-debounce';
import React, {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  useEffect,
} from 'react';

import { Input as ChakraInput } from '@chakra-ui/react';

type Props = {
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  size?: 'md' | 'lg';
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  autoFocus?: boolean;
  name: string;
  debounce?: number;
};

const Input: FC<Props> = ({ onChange, onBlur, debounce, ...props }) => {
  const debouncedOnChange = useDebouncedCallback(
    onChange ||
      (() => {
        return;
      }),
    debounce
  );

  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    if (debounce && debouncedOnChange.isPending()) {
      debouncedOnChange.flush();
    }

    onBlur && onBlur(event);
  };

  useEffect(
    () => () => {
      debounce && debouncedOnChange.isPending() && debouncedOnChange.flush();
    },
    [debounce, debouncedOnChange]
  );

  return (
    <ChakraInput
      {...props}
      onChange={debounce ? debouncedOnChange : onChange}
      onBlur={onBlurHandler}
    />
  );
};

export default Input;
export { Props as InputProps };
