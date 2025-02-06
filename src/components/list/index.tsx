import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList } from '@chakra-ui/react';

export { ListRootProps, ListItemProps } from '@chakra-ui/react';

const { Root, Item } = ChakraList;

Root.displayName = 'List.Root';
Item.displayName = 'List.Item';

export type ListProps = PropsWithChildren & {
  variant?: 'icon-inside' | 'icon-outside';
  size?: 'sm' | 'md';
  start?: number;
};

export const List = {
  Root,
  Item,
};

