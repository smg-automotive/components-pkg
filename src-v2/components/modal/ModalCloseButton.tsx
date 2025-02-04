import React, { FC } from 'react';
import {
  ModalCloseButton as ChakraModalCloseButton,
  ModalCloseButtonProps,
} from '@chakra-ui/react';

const ModalCloseButton: FC<ModalCloseButtonProps> = (props) => {
  return <ChakraModalCloseButton {...props} />;
};

export default ModalCloseButton;
