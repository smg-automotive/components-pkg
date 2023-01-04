import React, { FC, PropsWithChildren } from 'react';
import { Tab as ChakraTab, TabProps } from '@chakra-ui/react';

type Props = Pick<TabProps, 'isDisabled'>;

const Tab: FC<PropsWithChildren<Props>> = (props) => {
  return <ChakraTab {...props}>{props.children}</ChakraTab>;
};

export default Tab;
