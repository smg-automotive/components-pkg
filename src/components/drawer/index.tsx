'use client';

import React, { FC, PropsWithChildren } from 'react';

import {
  Drawer as ChakraDrawer,
  DrawerRootProps as DrawerProps,
  Portal,
} from '@chakra-ui/react';

interface DrawerComponentProps
  extends Omit<DrawerProps, 'open' | 'onOpenChange'> {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<PropsWithChildren<DrawerComponentProps>> = (props) => {
  const { children, isOpen, onClose, ...drawerProps } = props;

  return (
    <ChakraDrawer.Root
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
      {...drawerProps}
    >
      <Portal>{children}</Portal>
    </ChakraDrawer.Root>
  );
};

export type { DrawerComponentProps };
