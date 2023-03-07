import React, { FC, PropsWithChildren } from 'react';
import { OrderedList as ChakraOrderedList } from '@chakra-ui/react';

import { ListProps } from './props';

const OrderedList: FC<PropsWithChildren<ListProps & { start?: number }>> = ({
  children,
  variant,
  size,
  start = 1,
}) => {
  return (
    <ChakraOrderedList size={size} variant={variant} start={start}>
      {children}
    </ChakraOrderedList>
  );
};

export default OrderedList;
