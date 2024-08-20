import React, { FC, PropsWithChildren } from 'react';
import { ListItem as ChakraListItem, ListItemProps } from '@chakra-ui/react';

const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  children,
  ...rest
}) => {
  return <ChakraListItem {...rest}>{children}</ChakraListItem>;
};

export default ListItem;
