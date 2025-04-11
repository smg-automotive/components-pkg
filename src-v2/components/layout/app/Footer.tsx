import React from 'react';
import { ComponentWithAs, forwardRef } from '@chakra-ui/react';

import GridItem, { type GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutFooter: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  return <GridItem area="footer" ref={ref} {...(props as GridItemProps)} />;
});

AppLayoutFooter.displayName = 'AppLayoutFooter';

export default AppLayoutFooter;
