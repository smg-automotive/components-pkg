import React, { FC } from 'react';
import {
  ModalOverlay as ChakraModalOverlay,
  ModalOverlayProps,
} from '@chakra-ui/react';

const ModalOverlay: FC<ModalOverlayProps> = (props) => {
  return <ChakraModalOverlay {...props} />;
};

export default ModalOverlay;
