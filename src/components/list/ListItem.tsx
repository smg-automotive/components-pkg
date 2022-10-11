import React, { FC, PropsWithChildren } from 'react';
import { ListItem as ChakraListItem } from '@chakra-ui/react';

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraListItem>{children}</ChakraListItem>;
};

export default ListItem;
