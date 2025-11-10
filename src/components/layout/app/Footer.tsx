import React, { forwardRef } from 'react';

import { GridItem, GridItemProps } from 'src/components/grid';

export const AppLayoutFooter = forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    return <GridItem as="div" area="footer" ref={ref} {...props} />;
  },
);

AppLayoutFooter.displayName = 'AppLayoutFooter';
