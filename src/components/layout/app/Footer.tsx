import React, { forwardRef } from 'react';

import { GridItem, type GridItemProps } from 'src/components/grid';

export const AppLayoutFooter = forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    return <GridItem area="footer" ref={ref} {...(props as GridItemProps)} />;
  },
);

AppLayoutFooter.displayName = 'AppLayoutFooter';
