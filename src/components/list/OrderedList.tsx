import React, { FC, PropsWithChildren } from 'react';
import { OrderedList as ChakraList } from '@chakra-ui/react';

interface ListProps {
  variant?: 'sm' | 'md';
  start?: number;
}

const List: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
  start = 1,
}) => {
  return (
    <ChakraList
      spacing={variant}
      variant={variant}
      start={start}
      stylePosition={'inside'}
    >
      {children}
    </ChakraList>
  );
};

export default List;
