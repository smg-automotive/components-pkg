export { type GridProps, type GridItemProps } from '@chakra-ui/react';
import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
} from '@chakra-ui/react';

const Grid: ComponentWithAs<'div', GridProps> = forwardRef<GridProps, 'div'>(
  (props, ref) => {
    return <ChakraGrid {...(props as GridProps)} ref={ref} />;
  },
);

Grid.displayName = 'Grid';

const GridItem = ChakraGridItem;
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
