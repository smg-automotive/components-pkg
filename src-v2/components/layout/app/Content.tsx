import React from 'react';
import { ComponentWithAs, forwardRef } from '@chakra-ui/react';

import GridItem, { type GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutContent: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  return <GridItem area="content" ref={ref} {...(props as GridItemProps)} />;
});

AppLayoutContent.displayName = 'AppLayoutContent';

export default AppLayoutContent;
