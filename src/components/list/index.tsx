import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListItem } from '@chakra-ui/react';

const List: FC<PropsWithChildren> = ({ children }) => {
  const isSingleChild = !Array.isArray(children);
  const childrenArray = isSingleChild ? [children] : children;

  return (
    <ChakraList spacing="md">
      {childrenArray.map((child, index) => {
        return <ListItem key={`listItemChild-${index}`}>{child}</ListItem>;
      })}
    </ChakraList>
  );
};

export default List;
