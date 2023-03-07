import React, { FC, PropsWithChildren } from 'react';
import { List } from '@chakra-ui/react';

import { ListProps } from './props';

const OrderedList: FC<PropsWithChildren<ListProps & { start?: number }>> = ({
  children,
  ...props
}) => {
  return (
    // default implementation in chakra forces 1em margin-start
    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/list.tsx#L95
    <List as="ol" styleType="decimal" {...props}>
      {children}
    </List>
  );
};

export default OrderedList;
