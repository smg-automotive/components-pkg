import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
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
};

const Input: FC<Props> = (props) => <ChakraInput {...props} />;

export default Input;
export { Props as InputProps };
