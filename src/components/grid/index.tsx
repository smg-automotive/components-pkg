export { type GridProps, type GridItemProps } from '@chakra-ui/react';
import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
} from '@chakra-ui/react';

const Grid = ChakraGrid;
Grid.displayName = 'Grid';

const GridItem = ChakraGridItem;
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
