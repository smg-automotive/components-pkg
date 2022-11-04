import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
} from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

import { useDebouncedOnChange } from '../hooks';

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

const Input = forwardRef<HTMLInputElement, Props>(
  ({ onChange, onBlur, debounce, ...props }, ref) => {
    const { onBlur: onBlurHandler, onChange: onChangeHandler } =
      useDebouncedOnChange({
        onBlur,
        onChange,
        debounce,
      });

    return (
      <ChakraInput
        {...props}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        ref={ref}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;
export { Props as InputProps };
