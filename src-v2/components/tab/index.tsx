import React, { FC, PropsWithChildren } from 'react';
import { Tabs as ChakraTabs, TabsProps } from '@chakra-ui/react';

export type Props = {
  variant?: 'spaceBetween' | 'spaceAround' | 'enclosed' | 'fullWidth';
} & Pick<TabsProps, 'defaultIndex' | 'isLazy' | 'onChange' | 'index'>;

const Tabs: FC<PropsWithChildren<Props>> = (props) => {
  return <ChakraTabs {...props}>{props.children}</ChakraTabs>;
};

export default Tabs;
