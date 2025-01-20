import React from 'react';
import { ComponentWithAs, forwardRef } from '@chakra-ui/react';

import Grid, { type GridProps } from 'src/components/grid';

const pageGirdArea = `
  "header"
  "content"
  "footer"
`;

const AppLayout: ComponentWithAs<'div', GridProps> = forwardRef<
  GridProps,
  'div'
>((props, ref) => {
  return (
    <Grid
      templateRows="min-content auto min-content"
      templateAreas={pageGirdArea}
      minHeight="100vh"
      ref={ref}
      textStyle="body"
      {...(props as GridProps)}
    />
  );
});

AppLayout.displayName = 'AppLayout';

export default AppLayout;
