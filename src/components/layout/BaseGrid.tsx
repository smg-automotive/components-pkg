import React, { FC, PropsWithChildren } from 'react';

import { Container, Grid, GridProps } from '@chakra-ui/react';

export const repeatArea = (count: number, area: string) => {
  return new Array(count).fill(area).join(' ');
};

const BaseGridLayout: FC<PropsWithChildren<GridProps>> = (props) => {
  const { children, ...gridProps } = props;

  return (
    <Container
      as="main"
      width="full"
      height="full"
      maxWidth="container.lg"
      paddingY={{ '2xs': 'md', md: '2xl' }}
      paddingX={{ '2xs': 'lg', lg: 0 }}
    >
      <Grid
        gridTemplateColumns={{ '2xs': '1fr', md: 'repeat(12, 1fr)' }}
        gap="2xl"
        {...gridProps}
      >
        {children}
      </Grid>
    </Container>
  );
};

export default BaseGridLayout;
