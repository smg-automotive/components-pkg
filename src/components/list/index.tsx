import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList } from '@chakra-ui/react';

const List: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraList spacing="md">{children}</ChakraList>;
};

export default List;
