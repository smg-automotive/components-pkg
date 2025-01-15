import React from 'react';
import {
  GridItem as ChakraGridItem,
  ComponentWithAs,
  forwardRef,
  type GridItemProps,
} from '@chakra-ui/react';

const GridItem: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  return <ChakraGridItem {...(props as GridItemProps)} ref={ref} />;
});

GridItem.displayName = 'GridItem';

export default GridItem;
export { type GridItemProps };
