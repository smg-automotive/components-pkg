import React, { FC, PropsWithChildren } from 'react';

import {
  DrawerContent as ChakraDrawerContent,
  DrawerContentProps as ChakraDrawerContentProps,
} from '@chakra-ui/react';

const DrawerContent: FC<PropsWithChildren<ChakraDrawerContentProps>> = (
  props
) => {
  const { children, ...drawerContentProps } = props;

  return (
    <ChakraDrawerContent {...drawerContentProps}>
      {children}
    </ChakraDrawerContent>
  );
};

export default DrawerContent;
