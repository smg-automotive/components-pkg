import React, { FC, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps as ChakraProps } from '@chakra-ui/react';

interface ListProps extends ChakraProps {
  variant?: 'sm' | 'md';
}

const List: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
  ...rest
}) => {
  return (
    <ChakraList {...rest} spacing={variant} variant={variant}>
      {children}
    </ChakraList>
  );
};

export default List;
