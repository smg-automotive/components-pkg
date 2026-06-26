import React, { forwardRef } from 'react';
import {
  CloseButton as ChakraCloseButton,
  CloseButtonProps,
} from '@chakra-ui/react';

export const DialogCloseButton = forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>((props, ref) => (
  <ChakraCloseButton ref={ref} cursor={'pointer'} {...props} />
));
