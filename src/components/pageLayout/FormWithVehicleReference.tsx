import React, { FC, MouseEvent, PropsWithChildren, ReactNode } from 'react';

import {
  chakra,
  Flex,
  Grid,
  GridItem,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import VehicleReference, { VehicleProps } from '../vehicleReference';
import Link from '../link';
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
  const styles = useMultiStyleConfig(`FormWithVehicleReference`);

  const Component = chakra('main');

  return (
    <Component>
      <Grid
        templateAreas={{
          xs: `"header" "vehicle" "main"`,
          lg: `"header vehicle" "main vehicle"`,
        }}
        gridTemplateColumns={{ lg: 'repeat(2, 1fr)' }}
        gridTemplateRows="minmax(min-content, max-content) 1fr"
      >
        <GridItem area="header">
          <Link href={backLink.url} leftIcon={<ArrowLeftIcon />} paddingY="lg">
            {backLink.text}
          </Link>
          <chakra.h1 __css={styles.title}>{title}</chakra.h1>
        </GridItem>
        <GridItem area="vehicle">
          <VehicleReference {...vehicle} />
        </GridItem>
        <GridItem area="main">
          <Flex direction="column" paddingY="2xl">
            {children}
          </Flex>
          <Button onClick={submitButton.onClick}>{submitButton.label}</Button>
        </GridItem>
      </Grid>
    </Component>
  );
};

export default FormWithVehicleReference;
