import React from 'react';
import { Grid as ChakraGrid, forwardRef, GridProps } from '@chakra-ui/react';

const Grid = forwardRef<GridProps, 'div'>((props, ref) => {
  return <ChakraGrid {...props} ref={ref} />;
});

Grid.displayName = 'Grid';

export default Grid;
export { GridProps };
