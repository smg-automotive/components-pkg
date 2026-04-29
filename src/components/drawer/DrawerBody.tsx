import React, { FC, PropsWithChildren } from 'react';

import { Drawer as ChakraDrawer, DrawerBodyProps } from '@chakra-ui/react';

export const DrawerBody: FC<PropsWithChildren<DrawerBodyProps>> = (props) => {
  const { children, ...drawerBodyProps } = props;

  return <ChakraDrawer.Body {...drawerBodyProps}>{children}</ChakraDrawer.Body>;
};
