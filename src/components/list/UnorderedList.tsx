import React, { FC, PropsWithChildren } from 'react';
import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react';

import { ListProps } from './props';

const UnorderedList: FC<PropsWithChildren<ListProps>> = ({
  children,
  variant,
  size,
}) => {
  return (
    <ChakraUnorderedList size={size} variant={variant}>
      {children}
    </ChakraUnorderedList>
  );
};

export default UnorderedList;
