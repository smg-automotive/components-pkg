import React, { FC, PropsWithChildren } from 'react';
import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';

const TabPanel: FC<PropsWithChildren> = (props) => {
  return <ChakraTabPanel>{props.children}</ChakraTabPanel>;
};

export default TabPanel;
