import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

const List: FC<PropsWithChildren<Omit<ListProps, 'variant'>>> = ({
  children,
  ...props
}) => {
  return <ChakraList {...props}>{children}</ChakraList>;
};

export default List;
