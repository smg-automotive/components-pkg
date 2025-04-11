import React from 'react';
import { ComponentWithAs, forwardRef } from '@chakra-ui/react';

import GridItem, { type GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutHeader: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  return <GridItem area="header" ref={ref} {...(props as GridItemProps)} />;
});

AppLayoutHeader.displayName = 'AppLayoutHeader';

export default AppLayoutHeader;
