import React, { FC, PropsWithChildren } from 'react';

import { Drawer as ChakraDrawer, DrawerProps } from '@chakra-ui/react';

interface Props extends DrawerProps {
  variant?: 'slider';
}

const Drawer: FC<PropsWithChildren<Props>> = (props) => {
  const { children, variant, ...drawerProps } = props;

  return (
    <ChakraDrawer variant={variant} {...drawerProps}>
      {children}
    </ChakraDrawer>
  );
};

export default Drawer;
export type { DrawerProps };
