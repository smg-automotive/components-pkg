import React, { FC, PropsWithChildren } from 'react';

import { ModalBody as ChakraModalBody, ModalBodyProps } from '@chakra-ui/react';

const ModalBody: FC<PropsWithChildren<ModalBodyProps>> = (props) => {
  const { children, ...modalBodyProps } = props;

  return <ChakraModalBody {...modalBodyProps}>{children}</ChakraModalBody>;
};

export default ModalBody;
