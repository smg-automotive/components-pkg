import React, { FC, PropsWithChildren } from 'react';

import { Center, Container, Grid, GridProps } from '@chakra-ui/react';

export const repeatArea = (count: number, area: string) => {
  return new Array(count).fill(area).join(' ');
};

const BaseGridLayout: FC<PropsWithChildren<GridProps>> = (props) => {
  const { children, ...gridProps } = props;

  return (
    <Center>
      <Container
        as="main"
        width="full"
        maxWidth="container.xl"
        paddingY={{ xs: 'xl', lg: '2xl' }}
        paddingX={{ xs: 'md', lg: '4xl' }}
      >
        <Grid
          gridTemplateColumns={{ xs: '1fr', lg: 'repeat(12, 1fr)' }}
          gap="xl"
          {...gridProps}
        >
          {children}
        </Grid>
      </Container>
    </Center>
  );
};

export default BaseGridLayout;
