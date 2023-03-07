import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

const List: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
  size,
}) => {
  return (
    <ChakraList size={size} variant={variant}>
      {children}
    </ChakraList>
  );
};

export default List;
