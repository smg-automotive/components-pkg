import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import GridItem, { GridItemProps } from '../../grid/GridItem';

const AppLayoutContent = forwardRef<GridItemProps, 'div'>((props, ref) => {
  return <GridItem area="content" ref={ref} {...props} />;
});

AppLayoutContent.displayName = 'AppLayoutContent';

export default AppLayoutContent;
