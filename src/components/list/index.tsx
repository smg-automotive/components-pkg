import React, { forwardRef, PropsWithChildren } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

export type Props = PropsWithChildren<Omit<ListProps, 'variant'>>;

const List = forwardRef<HTMLUListElement | null, Props>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraList ref={ref} {...props}>
        {children}
      </ChakraList>
    );
  },
);

List.displayName = 'List';

export default List;
