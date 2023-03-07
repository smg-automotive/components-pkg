import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

const List: FC<PropsWithChildren<Omit<ListProps, 'variant'>>> = ({
  children,
  size,
}) => {
  return <ChakraList size={size}>{children}</ChakraList>;
};

export default List;
