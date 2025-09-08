import React, { forwardRef } from 'react';
import {
  CloseButton as ChakraCloseButton,
  CloseButtonProps,
} from '@chakra-ui/react';

const ModalCloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (props, ref) => <ChakraCloseButton ref={ref} cursor={'pointer'} {...props} />,
);

export default ModalCloseButton;
