import React from 'react';
import { forwardRef } from '@chakra-ui/react';

import Grid, { GridProps } from '../../grid';

const pageGirdArea = `
  "header"
  "content"
  "footer"
`;

const AppLayout = forwardRef<GridProps, 'div'>((props, ref) => {
  return (
    <Grid
      templateRows="min-content auto min-content"
      templateAreas={pageGirdArea}
      minHeight="100vh"
      ref={ref}
      textStyle="body"
      {...props}
    />
  );
});

AppLayout.displayName = 'AppLayout';

export default AppLayout;
