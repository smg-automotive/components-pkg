import React, { forwardRef } from 'react';

import { GridItem, GridItemProps } from 'src/components/grid';

export const AppLayoutHeader = forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    return <GridItem as="div" area="header" ref={ref} {...props} />;
  },
);

AppLayoutHeader.displayName = 'AppLayoutHeader';
