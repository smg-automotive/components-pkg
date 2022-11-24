import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import GridItem, { GridProps } from '../../grid/GridItem';

const AppLayoutFooter = forwardRef<GridProps, 'div'>((props, ref) => {
  return <GridItem area="footer" ref={ref} {...props} />;
});

AppLayoutFooter.displayName = 'AppLayoutFooter';

export default AppLayoutFooter;
