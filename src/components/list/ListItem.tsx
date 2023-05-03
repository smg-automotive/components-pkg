import React, { FC, PropsWithChildren } from 'react';
import { ListItem as ChakraListItem } from '@chakra-ui/react';

const ListItem: FC<PropsWithChildren> = ({ children, ...rest }) => {
  return <ChakraListItem {...rest}>{children}</ChakraListItem>;
};

export default ListItem;
