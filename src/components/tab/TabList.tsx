import React, { FC, PropsWithChildren } from 'react';
import { TabList as ChakraTabList } from '@chakra-ui/react';

import Box from '../box';

const TabList: FC<PropsWithChildren> = (props) => {
  return (
    <Box overflowX="auto">
      <ChakraTabList
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns="minmax(0,1fr)"
        {...props}
      >
        {props.children}
      </ChakraTabList>
    </Box>
  );
};

export default TabList;
