import React, { FC, PropsWithChildren } from 'react';

import {
  DrawerBody as ChakraDrawerBody,
  ModalBodyProps as ChakraModalBodyProps,
} from '@chakra-ui/react';

const DrawerBody: FC<PropsWithChildren<ChakraModalBodyProps>> = (props) => {
  const { children, ...drawerBodyProps } = props;

  return <ChakraDrawerBody {...drawerBodyProps}>{children}</ChakraDrawerBody>;
};

export default DrawerBody;
