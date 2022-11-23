import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import GridItem, { GridProps } from '../../grid/GridItem';

const AppLayoutContent = forwardRef<GridProps, 'div'>((props, ref) => {
  return <GridItem area="content" ref={ref} {...props} />;
});

AppLayoutContent.displayName = 'AppLayoutContent';

export default AppLayoutContent;
