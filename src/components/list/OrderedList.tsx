import React, { FC, PropsWithChildren } from 'react';
import { OrderedList as ChakraOrderedList } from '@chakra-ui/react';

interface ListProps {
  variant?: 'sm' | 'md';
  start?: number;
}

const OrderedList: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
  start = 1,
}) => {
  return (
    <ChakraOrderedList
      spacing={variant}
      variant={variant}
      start={start}
      stylePosition="inside"
    >
      {children}
    </ChakraOrderedList>
  );
};

export default OrderedList;
