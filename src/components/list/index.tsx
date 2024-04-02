import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

export type Props = PropsWithChildren<Omit<ListProps, 'variant'>>;

const List: FC<Props> = ({ children, ...props }) => {
  return <ChakraList {...props}>{children}</ChakraList>;
};

export default List;
