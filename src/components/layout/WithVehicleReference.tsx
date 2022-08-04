import React, { FC, PropsWithChildren } from 'react';

import {
  Center,
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';

import VehicleReference, { VehicleProps } from '../vehicleReference';
import Stack from '../stack';
import Link from '../link';
import { ArrowLeftIcon } from '../icons';

interface Props {
  title: string;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleProps;
}

const LayoutWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  children,
}) => {
  const repeatArea = (count: number, area: string) => {
    return new Array(count).fill(area).join(' ');
  };

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
          templateAreas={{
            xs: `"backlink" "vehicle" "main"`,
            lg: `
            "${repeatArea(12, 'backlink')}"
            "${repeatArea(6, 'main')} . ${repeatArea(5, 'vehicle')}"`,
          }}
          gridTemplateColumns={{ lg: 'repeat(12, 1fr)' }}
          gridTemplateRows="minmax(min-content, max-content) 1fr"
          gap="xl"
        >
          <GridItem area="backlink">
            {backLink ? (
              <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
                {backLink.text}
              </Link>
            ) : null}
          </GridItem>
          <GridItem area="vehicle">
            <VehicleReference {...vehicle} />
          </GridItem>
          <GridItem area="main">
            <Heading as="h1" textStyle="heading1" marginBottom="xl">
              {title}
            </Heading>
            <Stack direction="column" spacing="2xl">
              {children}
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Center>
  );
};

export default LayoutWithVehicleReference;
