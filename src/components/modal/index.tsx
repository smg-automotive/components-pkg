import React, { FC, PropsWithChildren } from 'react';
import { Modal as ChakraModal, ModalProps } from '@chakra-ui/react';

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { children, ...modalProps } = props;

  return <ChakraModal {...modalProps}>{children}</ChakraModal>;
};

export default Modal;
