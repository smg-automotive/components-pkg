'use client';

import React, { FC, PropsWithChildren } from 'react';

import {
  Drawer as ChakraDrawer,
  DrawerRootProps,
  Portal,
} from '@chakra-ui/react';

import { DrawerOverlay } from './DrawerOverlay';
import { DrawerContent } from './DrawerContent';
import { DrawerBody } from './DrawerBody';

interface DrawerProps extends Omit<DrawerRootProps, 'open' | 'onOpenChange'> {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = (props) => {
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

export type { DrawerProps };

export { DrawerOverlay, DrawerContent, DrawerBody };
