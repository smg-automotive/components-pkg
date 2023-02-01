import React, { FC, PropsWithChildren } from 'react';
import { Tab as ChakraTab, TabProps } from '@chakra-ui/react';

type Props = {
  marginX?: 'lg' | 'md';
} & Pick<TabProps, 'isDisabled'>;

const Tab: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <ChakraTab marginX={props.marginX} {...props}>
      {props.children}
    </ChakraTab>
  );
};

export default Tab;
