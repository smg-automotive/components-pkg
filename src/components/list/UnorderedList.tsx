import React, { FC, PropsWithChildren } from 'react';
import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react';

interface ListProps {
  variant?: 'sm' | 'md';
}

const UnorderedList: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
}) => {
  return (
    <ChakraUnorderedList
      spacing={variant}
      variant={variant}
      stylePosition="inside"
    >
      {children}
    </ChakraUnorderedList>
  );
};

export default UnorderedList;
