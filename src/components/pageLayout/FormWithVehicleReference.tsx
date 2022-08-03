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
          gridTemplateColumns={{ lg: '1fr 120px 1fr' }}
          gridTemplateRows="minmax(min-content, max-content) 1fr"
        >
          <GridItem area="header">
            <Link
              href={backLink.url}
              leftIcon={<ArrowLeftIcon />}
              paddingY="lg"
            >
              {backLink.text}
            </Link>
            <chakra.h1 textStyle="heading1">{title}</chakra.h1>
          </GridItem>
          <GridItem area="vehicle">
            <VehicleReference {...vehicle} />
          </GridItem>
          <GridItem area="main" paddingY="2xl">
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
