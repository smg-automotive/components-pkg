import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import GridItem, { GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutFooter = forwardRef<GridItemProps, 'div'>((props, ref) => {
  return <GridItem area="footer" ref={ref} {...props} />;
});

AppLayoutFooter.displayName = 'AppLayoutFooter';

export default AppLayoutFooter;
