import React, { FC } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

type Props = {
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  size?: 'md' | 'lg';
};

const Input: FC<Props> = (props) => <ChakraInput {...props} />;

export default Input;
