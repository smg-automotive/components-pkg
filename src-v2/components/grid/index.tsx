import React from 'react';
import {
  Grid as ChakraGrid,
  ComponentWithAs,
  forwardRef,
  type GridProps,
} from '@chakra-ui/react';

const Grid: ComponentWithAs<'div', GridProps> = forwardRef<GridProps, 'div'>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <ChakraGrid {...(props as GridProps)} ref={ref} />;
  },
);

Grid.displayName = 'Grid';

export default Grid;
export { type GridProps };
