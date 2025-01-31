import React, { FC, PropsWithChildren } from 'react';

import { Grid, type GridProps } from 'src';

export const repeatArea = (count: number, area: string) => {
  return new Array(count).fill(area).join(' ');
};

export type BaseGridLayoutProps = GridProps;

export const BaseGridLayout: FC<PropsWithChildren<BaseGridLayoutProps>> = (props) => {
  const { children, ...gridProps } = props;

  return (
    <Grid
      templateColumns={{ '2xs': '1fr', md: 'repeat(12, 1fr)' }}
      gap="2xl"
      {...gridProps}
    >
      {children}
    </Grid>
  );
};
