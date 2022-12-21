import React, { FC } from 'react';
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

type Props = Pick<
  SimpleGridProps,
  | 'minChildWidth'
  | 'columns'
  | 'spacing'
  | 'spacingX'
  | 'spacingY'
  | 'children'
  | 'alignItems'
>;

const SimpleGrid: FC<Props> = (props) => <ChakraSimpleGrid {...props} />;

export default SimpleGrid;
export { Props as GridProps };
