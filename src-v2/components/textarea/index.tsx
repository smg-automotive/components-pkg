import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
} from 'react';

import { Textarea as ChakraTextarea } from '@chakra-ui/react';

export interface Props {
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
  textStyle?: 'body' | 'body-small';
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ ...props }, ref) => {
  return <ChakraTextarea {...props} ref={ref} />;
});
Textarea.displayName = 'Textarea';

export default Textarea;
