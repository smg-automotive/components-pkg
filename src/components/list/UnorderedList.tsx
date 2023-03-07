import React, { FC, PropsWithChildren } from 'react';
import { List } from '@chakra-ui/react';

import { ListProps } from './props';

const UnorderedList: FC<PropsWithChildren<ListProps>> = ({
  children,
  ...props
}) => {
  return (
    // default implementation in chakra forces 1em margin-start
    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/list.tsx#L107
    <List as="ul" styleType="initial" {...props}>
      {children}
    </List>
  );
};

export default UnorderedList;
