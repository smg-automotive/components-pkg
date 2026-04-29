import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
} from 'react';

import { Textarea as ChakraTextarea } from '@chakra-ui/react';

export interface TextareaProps {
  name: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
  textStyle?: 'body' | 'body-small';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return <ChakraTextarea {...props} ref={ref} />;
  },
);
Textarea.displayName = 'Textarea';
