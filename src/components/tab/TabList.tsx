import React, { FC, PropsWithChildren } from 'react';
import { TabList as ChakraTabList } from '@chakra-ui/react';

interface Props {
  justifyContent?: 'start' | 'space-between' | 'space-around';
}

const TabList: FC<PropsWithChildren<Props>> = ({
  justifyContent = 'start',
  ...props
}) => {
  return (
    <ChakraTabList justifyContent={justifyContent}>
      {props.children}
    </ChakraTabList>
  );
};

export default TabList;
