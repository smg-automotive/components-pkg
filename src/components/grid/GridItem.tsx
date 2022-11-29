import React from 'react';
import {
  GridItem as ChakraGridItem,
  forwardRef,
  GridItemProps,
} from '@chakra-ui/react';

const GridItem = forwardRef<GridItemProps, 'div'>((props, ref) => {
  return <ChakraGridItem {...props} ref={ref} />;
});

GridItem.displayName = 'GridItem';

export default GridItem;
export { GridItemProps };
