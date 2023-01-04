import React, { FC, PropsWithChildren } from 'react';
import { Tabs as ChakraTabs, TabsProps } from '@chakra-ui/react';

type Props = Pick<TabsProps, 'defaultIndex' | 'isLazy'>;

const Tabs: FC<PropsWithChildren<Props>> = (props) => {
  return <ChakraTabs {...props}>{props.children}</ChakraTabs>;
};

export default Tabs;
