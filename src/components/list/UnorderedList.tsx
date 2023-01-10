import React, { FC, PropsWithChildren } from 'react';
import { UnorderedList as ChakraList } from '@chakra-ui/react';

interface ListProps {
  variant?: 'sm' | 'md';
}

const List: FC<PropsWithChildren<ListProps>> = ({ children, variant }) => {
  return (
    <ChakraList spacing={variant} variant={variant} stylePosition={'inside'}>
      {children}
    </ChakraList>
  );
};

export default List;
