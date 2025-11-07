import React, { forwardRef } from 'react';

import { GridItem, type GridItemProps } from 'src/components/grid';

export const AppLayoutContent = forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    return (
      <GridItem
        as="div"
        area="content"
        ref={ref}
        {...(props as GridItemProps)}
      />
    );
  },
);

AppLayoutContent.displayName = 'AppLayoutContent';
