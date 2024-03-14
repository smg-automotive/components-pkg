import React, { FC, PropsWithChildren } from 'react';
import { Tabs as ChakraTabs, TabsProps } from '@chakra-ui/react';

type Props = {
  variant?: 'spaceBetween' | 'spaceAround';
} & Pick<
  TabsProps,
  | 'defaultIndex'
  | 'isLazy'
  | 'onChange'
  | 'index'
  | 'overflow'
  | 'overflowY'
  | 'overflowX'
  | 'w'
  | 'width'
  | 'maxW'
  | 'maxWidth'
>;

const Tabs: FC<PropsWithChildren<Props>> = (props) => {
  return <ChakraTabs {...props}>{props.children}</ChakraTabs>;
};

export default Tabs;
