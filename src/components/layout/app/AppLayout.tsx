import React, { forwardRef } from 'react';

import { Grid, GridProps } from 'src/components/grid';

const pageGridArea = `
  "header"
  "content"
  "footer"
`;

export const AppLayout = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return (
    <Grid
      as="div"
      templateRows="min-content auto min-content"
      templateAreas={pageGridArea}
      minHeight="screen-height"
      ref={ref}
      textStyle="body"
      {...props}
    />
  );
});

AppLayout.displayName = 'AppLayout';
