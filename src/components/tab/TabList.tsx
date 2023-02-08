import React, { FC, PropsWithChildren } from 'react';
import { TabList as ChakraTabList } from '@chakra-ui/react';

const TabList: FC<PropsWithChildren> = ({ ...props }) => {
  return <ChakraTabList>{props.children}</ChakraTabList>;
};

export default TabList;
