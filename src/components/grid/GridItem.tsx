import React from 'react';
import {
  GridItem as ChakraGridItem,
  forwardRef,
  GridItemProps,
} from '@chakra-ui/react';

type Props = Pick<GridItemProps, 'children' | 'area'>;

const GridItem = forwardRef<Props, 'div'>((props, ref) => {
  return <ChakraGridItem {...props} ref={ref} />;
});

GridItem.displayName = 'GridItem';

export default GridItem;
export { Props as GridProps };
