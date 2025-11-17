import React, { forwardRef } from 'react';

import { GridItem, GridItemProps } from 'src/components/grid';

export const AppLayoutContent = forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    return <GridItem as="div" area="content" ref={ref} {...props} />;
  },
);

AppLayoutContent.displayName = 'AppLayoutContent';
