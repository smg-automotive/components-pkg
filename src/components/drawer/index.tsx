'use client';

import React, { FC, PropsWithChildren } from 'react';

import {
  Drawer as ChakraDrawer,
  DrawerRootProps as DrawerProps,
  Portal,
} from '@chakra-ui/react';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = (props) => {
  const { children, ...drawerProps } = props;

  return (
    <ChakraDrawer.Root {...drawerProps}>
      <Portal>{children}</Portal>
    </ChakraDrawer.Root>
  );
};

export type { DrawerProps };
