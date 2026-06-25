import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
} from 'react';

import { Textarea as ChakraTextarea, HTMLChakraProps } from '@chakra-ui/react';

export interface TextareaProps {
  name: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  autoresize?: boolean;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
  textStyle?: 'body' | 'body-small';
  minHeight?: HTMLChakraProps<'textarea'>['minHeight'];
  maxHeight?: HTMLChakraProps<'textarea'>['maxHeight'];
  padding: HTMLChakraProps<'textarea'>['padding'];
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return <ChakraTextarea {...props} ref={ref} />;
  },
);
Textarea.displayName = 'Textarea';
