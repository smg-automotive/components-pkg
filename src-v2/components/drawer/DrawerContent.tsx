import React, { FC, PropsWithChildren } from 'react';

import {
  DrawerContent as ChakraDrawerContent,
  DrawerContentProps as ChakraDrawerContentProps,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface Props extends ChakraDrawerContentProps {
  withCloseButton?: boolean;
}

const DrawerContent: FC<PropsWithChildren<Props>> = (props) => {
  const { children, withCloseButton, ...drawerContentProps } = props;

  return (
    <ChakraDrawerContent {...drawerContentProps}>
      {withCloseButton && <DrawerCloseButton fontSize="base" />}
      {children}
    </ChakraDrawerContent>
  );
};

export default DrawerContent;
