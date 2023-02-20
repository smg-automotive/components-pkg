import React from 'react';
import {
  GridItem as ChakraGridItem,
  ComponentWithAs,
  forwardRef,
  GridItemProps,
} from '@chakra-ui/react';

const GridItem: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ChakraGridItem {...(props as GridItemProps)} ref={ref} />;
});

GridItem.displayName = 'GridItem';

export default GridItem;
export { GridItemProps };
