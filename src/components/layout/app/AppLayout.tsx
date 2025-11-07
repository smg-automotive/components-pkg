import React, { forwardRef } from 'react';

import { Grid, type GridProps } from 'src/components/grid';

const pageGirdArea = `
  "header"
  "content"
  "footer"
`;

export const AppLayout = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return (
    <Grid
      templateRows="min-content auto min-content"
      templateAreas={pageGirdArea}
      minHeight="screen-height"
      ref={ref}
      textStyle="body"
      {...(props as GridProps)}
    />
  );
});

AppLayout.displayName = 'AppLayout';
