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
  return (
    <Center>
      <Container as="main" width="full" maxWidth="container.xl">
        <Grid
          templateAreas={{
            xs: `"backlink" "heading" "vehicle" "main"`,
            lg: `"backlink . ." "heading . vehicle" "main . vehicle"`,
          }}
          gridTemplateColumns={{ lg: '1fr 100px 1fr' }}
          gridTemplateRows="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
          gap="xl"
        >
          <GridItem area="backlink">
            {backLink ? (
              <chakra.div paddingBottom="xl">
                <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
                  {backLink.text}
                </Link>
              </chakra.div>
            ) : null}
          </GridItem>
          <GridItem area="heading">
            <Heading as="h1" textStyle="heading1">
              {title}
            </Heading>
          </GridItem>
          <GridItem area="vehicle">
            <VehicleReference {...vehicle} />
          </GridItem>
          <GridItem area="main">
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
