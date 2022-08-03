import React, { FC, MouseEvent, PropsWithChildren } from 'react';

import { Center, chakra, Grid, GridItem } from '@chakra-ui/react';

import VehicleReference, { VehicleProps } from '../vehicleReference';
import Link from '../link';
import { Stack } from '../index';
import { ArrowLeftIcon } from '../icons';
import Button from '../button';

interface Props {
  title: string;
  backLink: {
    text: string;
    url: string;
  };
  vehicle: VehicleProps;
  submitButton: {
    onClick: (event: MouseEvent<HTMLElement>) => void;
    label: string;
  };
}

const FormWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  submitButton,
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
            <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
              {backLink.text}
            </Link>
            <chakra.h1 textStyle="heading1" paddingTop="xl">
              {title}
            </chakra.h1>
          </GridItem>
          <GridItem area="vehicle">
            <VehicleReference {...vehicle} />
          </GridItem>
          <GridItem area="main">
            <Stack direction="column" spacing="2xl">
              <chakra.div>{children}</chakra.div>
              <Button onClick={submitButton.onClick}>
                {submitButton.label}
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Component>
    </Center>
  );
};

export default FormWithVehicleReference;
