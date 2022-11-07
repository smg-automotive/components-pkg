import React, { FC, PropsWithChildren } from 'react';

import { DrawerProps, Drawer as ChakraDrawer } from '@chakra-ui/react';

const Drawer: FC<PropsWithChildren<DrawerProps>> = (props) => {
  const { children, ...drawerProps } = props;

  return <ChakraDrawer {...drawerProps}>{children}</ChakraDrawer>;
};

export default Drawer;
