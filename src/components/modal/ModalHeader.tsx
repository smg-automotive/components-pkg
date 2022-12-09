import React, { FC, PropsWithChildren } from 'react';

import {
  ModalHeader as ChakraModalHeader,
  ModalHeaderProps,
} from '@chakra-ui/react';

const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = (props) => {
  const { children, ...modalHeaderProps } = props;
  return (
    <ChakraModalHeader {...modalHeaderProps}>{children}</ChakraModalHeader>
  );
};

export default ModalHeader;
