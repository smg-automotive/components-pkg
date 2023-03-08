import React, { FC, PropsWithChildren } from 'react';
import { List } from '@chakra-ui/react';

import { ListProps } from './props';

export const styleTypes = [
  'decimal',
  'lower-alpha',
  'lower-roman',
  'upper-alpha',
  'upper-roman',
] as const;
type StyleType = (typeof styleTypes)[number];

const OrderedList: FC<
  PropsWithChildren<ListProps & { start?: number; styleType: StyleType }>
> = ({ children, styleType = 'decimal', ...props }) => {
  return (
    // default implementation in chakra forces 1em margin-start
    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/list.tsx#L95
    <List as="ol" styleType={styleType} {...props}>
      {children}
    </List>
  );
};

export default OrderedList;
