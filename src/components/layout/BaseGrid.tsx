/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC, PropsWithChildren } from 'react';

import { Center, Container, Grid, GridProps } from '@chakra-ui/react';

export const repeatArea = (count: number, area: string) => {
  return new Array(count).fill(area).join(' ');
};

const BaseGridLayout: FC<PropsWithChildren<GridProps>> = (props) => {
  const { children, ...gridProps } = props;

  return (
    <Center height="full">
      <Container
        as="main"
        width="full"
        height="full"
        maxWidth="container.xl"
        paddingY={{ '2xs': 'md', md: '2xl' }}
        paddingX={{ '2xs': 'md', md: '4xl' }}
      >
        <Grid
          gridTemplateColumns={{ '2xs': '1fr', md: 'repeat(12, 1fr)' }}
          gap="lg"
          {...gridProps}
        >
          {children}
        </Grid>
      </Container>
    </Center>
  );
};

export default BaseGridLayout;
