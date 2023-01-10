import React, { FC, PropsWithChildren } from 'react';
import { UnorderedList as UnorderedList } from '@chakra-ui/react';

interface ListProps {
  variant?: 'sm' | 'md';
}

const List: FC<PropsWithChildren<ListProps>> = ({ children, variant }) => {
  return (
    <UnorderedList spacing={variant} variant={variant} stylePosition={'inside'}>
      {children}
    </UnorderedList>
  );
};

export default List;
