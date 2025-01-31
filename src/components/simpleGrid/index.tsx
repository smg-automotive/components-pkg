import React, { FC } from 'react';
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

export type Props = Pick<
  SimpleGridProps,
  | 'minChildWidth'
  | 'columns'
  | 'children'
  | 'alignItems'
  | 'width'
  | 'rowGap'
  | 'gap'
>;

export const SimpleGrid: FC<Props> = (props) => <ChakraSimpleGrid {...props} />;
