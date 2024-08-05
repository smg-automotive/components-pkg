import React, { FC, PropsWithChildren } from 'react';
import { TabPanel as ChakraTabPanel, TabPanelProps } from '@chakra-ui/react';

const TabPanel: FC<PropsWithChildren<Pick<TabPanelProps, 'margin'>>> = ({
  margin = 'sm',
  children,
}) => {
  return <ChakraTabPanel margin={margin}>{children}</ChakraTabPanel>;
};

export default TabPanel;
