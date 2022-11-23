import React from 'react';
import { Grid as ChakraGrid, forwardRef, GridProps } from '@chakra-ui/react';

type Props = Pick<
  GridProps,
  | 'children'
  | 'templateAreas'
  | 'gap'
  | 'templateColumns'
  | 'templateRows'
  | 'minHeight'
>;

const Grid = forwardRef<Props, 'div'>((props, ref) => {
  return <ChakraGrid {...props} ref={ref} />;
});

Grid.displayName = 'Grid';

export default Grid;
export { Props as GridProps };
