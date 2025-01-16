import React, { FC } from 'react';
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

type Props = Pick<
  SimpleGridProps,
  | 'minChildWidth'
  | 'columns'
  // Spacing was removed 
  // | 'spacing'
  // | 'spacingX'
  // | 'spacingY'
  | 'children'
  | 'alignItems'
  | 'width'
  | 'rowGap'
>;

const SimpleGrid: FC<Props> = (props) => <ChakraSimpleGrid {...props} />;

export default SimpleGrid;
export { type Props as GridProps };
