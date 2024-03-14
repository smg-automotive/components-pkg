import React, { FC, PropsWithChildren } from 'react';
import { TabList as ChakraTabList, TabListProps } from '@chakra-ui/react';

type Props = Pick<TabListProps, 'w' | 'width' | 'maxW' | 'maxWidth'>;

const TabList: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return <ChakraTabList {...rest}>{children}</ChakraTabList>;
};

export default TabList;
