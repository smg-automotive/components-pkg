import React, { FC, PropsWithChildren } from 'react';

import { ModalFooter as ChakraModalFooter } from '@chakra-ui/react';

const ModalFooter: FC<PropsWithChildren> = (props) => {
  const { children, ...modalFooterProps } = props;

  return (
    <ChakraModalFooter {...modalFooterProps}>{children}</ChakraModalFooter>
  );
};

export default ModalFooter;
