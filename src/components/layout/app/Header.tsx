import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import GridItem, { GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutHeader = forwardRef<GridItemProps, 'div'>((props, ref) => {
  return <GridItem area="header" ref={ref} {...props} />;
});

AppLayoutHeader.displayName = 'AppLayoutFooter';

export default AppLayoutHeader;
