import React, { FC, PropsWithChildren } from 'react';

import {
  Drawer as ChakraDrawer,
  DrawerContentProps as ChakraDrawerContentProps,
} from '@chakra-ui/react';

import { CloseIcon } from '../icons';

interface Props extends ChakraDrawerContentProps {
  withCloseButton?: boolean;
}

export const DrawerContent: FC<PropsWithChildren<Props>> = (props) => {
  const { children, withCloseButton, ...drawerContentProps } = props;

  return (
    <ChakraDrawer.Positioner>
      <ChakraDrawer.Content {...drawerContentProps}>
        {withCloseButton ? (
          <ChakraDrawer.CloseTrigger asChild fontSize="base">
            <CloseIcon />
          </ChakraDrawer.CloseTrigger>
        ) : null}
        {children}
      </ChakraDrawer.Content>
    </ChakraDrawer.Positioner>
  );
};
