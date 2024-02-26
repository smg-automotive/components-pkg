import React, { FC, PropsWithChildren } from 'react';
import { Tab as ChakraTab, TabProps } from '@chakra-ui/react';

import { Space } from 'src/themes';

import Link, { LinkProps } from '../link';

type Props = {
  marginX?: Space;
  asLink?: boolean;
  linkProps?: LinkProps;
} & Pick<TabProps, 'isDisabled' | 'as'>;

const Tab: FC<PropsWithChildren<Props>> = (props) => {
  return props.asLink ? (
    <Link {...props.linkProps}>{props.children}</Link>
  ) : (
    <ChakraTab {...props}>{props.children}</ChakraTab>
  );
};

export default Tab;
