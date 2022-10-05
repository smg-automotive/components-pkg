import React, { FC, PropsWithChildren } from 'react';

import { Grid, GridProps } from '@chakra-ui/react';

export const repeatArea = (count: number, area: string) => {
  return new Array(count).fill(area).join(' ');
};

const BaseGridLayout: FC<PropsWithChildren<GridProps>> = (props) => {
  const { children, ...gridProps } = props;

  return (
    <Grid
      gridTemplateColumns={{ '2xs': '1fr', md: 'repeat(12, 1fr)' }}
      gap="2xl"
      {...gridProps}
    >
      {children}
    </Grid>
  );
};

export default BaseGridLayout;
