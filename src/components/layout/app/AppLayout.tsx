import React, { forwardRef, PropsWithChildren } from 'react';

import { Grid, GridProps } from '@/src/components/grid';

const pageGridArea = `
  "header"
  "content"
  "footer"
`;

export const AppLayout = forwardRef<
  HTMLDivElement,
  PropsWithChildren<GridProps>
>(({ children, ...rest }, ref) => {
  return (
    <Grid
      as="div"
      templateRows="min-content auto min-content"
      templateAreas={pageGridArea}
      minHeight="screen-height"
      ref={ref}
      textStyle="body"
      {...rest}
    >
      {children}
    </Grid>
  );
});

AppLayout.displayName = 'AppLayout';
