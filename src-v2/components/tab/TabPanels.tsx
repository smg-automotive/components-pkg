import React, { FC, PropsWithChildren } from 'react';
import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';

const TabPanels: FC<PropsWithChildren> = (props) => {
  return <ChakraTabPanels>{props.children}</ChakraTabPanels>;
};

export default TabPanels;
