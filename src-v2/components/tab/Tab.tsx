import React, { FC, PropsWithChildren } from 'react';
import { Tab as ChakraTab, TabProps } from '@chakra-ui/react';

import { Space } from 'src/themes';

type Props = {
  marginX?: Space;
} & Pick<TabProps, 'isDisabled' | 'as'>;

const Tab: FC<PropsWithChildren<Props>> = (props) => {
  return <ChakraTab {...props}>{props.children}</ChakraTab>;
};

export default Tab;
