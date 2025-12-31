import React, { FC, PropsWithChildren } from 'react';

import { Drawer as ChakraDrawer } from '@chakra-ui/react';

export const DrawerOverlay: FC<PropsWithChildren> = (props) => {
  return <ChakraDrawer.Backdrop {...props} />;
};
