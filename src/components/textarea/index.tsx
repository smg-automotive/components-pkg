import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';

import { Textarea as ChakraTextarea } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
}

const Textarea: FC<Props> = ({ ...props }) => {
  return <ChakraTextarea {...props} />;
};

export default Textarea;
