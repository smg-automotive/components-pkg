import React, { FC, PropsWithChildren } from 'react';
import {
  ModalContent as ChakraModalContent,
  ModalContentProps,
} from '@chakra-ui/react';

const ModalContent: FC<PropsWithChildren<ModalContentProps>> = (props) => {
  const { children, ...modalContentProps } = props;

  return (
    <ChakraModalContent {...modalContentProps}>{children}</ChakraModalContent>
  );
};

export default ModalContent;
