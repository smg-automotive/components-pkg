import { List as ChakraList } from '@chakra-ui/react';

export type { ListItemProps, ListRootProps } from '@chakra-ui/react';

const { Root, Item } = ChakraList;

Root.displayName = 'List.Root';
Item.displayName = 'List.Item';

export const List = {
  Root,
  Item,
};
