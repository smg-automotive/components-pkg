import React, { FC, PropsWithChildren } from 'react';

import {
  DrawerBody as ChakraDrawerBody,
  DrawerContent as ChakraDrawerContent,
  DrawerContentProps as ChakraDrawerContentProps,
} from '@chakra-ui/react';

const DrawerContent: FC<PropsWithChildren<ChakraDrawerContentProps>> = (props) => {
  const { children, ...drawerContentProps } = props;

  return (
    <ChakraDrawerContent {...drawerContentProps}>
      <ChakraDrawerBody>{children}</ChakraDrawerBody>
    </ChakraDrawerContent>
  );
};

export default DrawerContent;
