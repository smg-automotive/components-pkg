import React, { FC, PropsWithChildren } from 'react';

import { Center, chakra, Grid, GridItem } from '@chakra-ui/react';

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
  const Component = chakra('main');

  return (
    <Center>
      <Component maxWidth="container.xl">
        <Grid
          templateAreas={{
            xs: `"header" "vehicle" "main"`,
            lg: `"header . ." "main . vehicle"`,
          }}
          gridTemplateColumns={{ lg: '1fr 100px 1fr' }}
          gridTemplateRows="minmax(min-content, max-content) 1fr"
          gap="xl"
        >
          <GridItem area="header">
            {backLink ? (
              <chakra.div paddingBottom="xl">
                <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
                  {backLink.text}
                </Link>
              </chakra.div>
            ) : null}
            <chakra.h1 textStyle="heading1">{title}</chakra.h1>
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
      </Component>
    </Center>
  );
};

export default LayoutWithVehicleReference;
