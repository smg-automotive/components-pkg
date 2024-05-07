import React, { FC, PropsWithChildren } from 'react';
import { TabList as ChakraTabList, TabListProps } from '@chakra-ui/react';

import Box from '../box';

const TabList: FC<PropsWithChildren<TabListProps>> = (props) => {
  return (
    <Box overflowX="auto">
      <ChakraTabList {...props}>{props.children}</ChakraTabList>
    </Box>
  );
};

export default TabList;
