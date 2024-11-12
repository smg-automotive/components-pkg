import React, { FC, PropsWithChildren } from 'react';

import { DrawerOverlay as ChakraDrawerOverlay } from '@chakra-ui/react';

const DrawerOverlay: FC<PropsWithChildren> = (props) => {
  return <ChakraDrawerOverlay {...props} />;
};

export default DrawerOverlay;
