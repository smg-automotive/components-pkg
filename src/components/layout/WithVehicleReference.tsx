import React, { FC, PropsWithChildren } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import BaseGridLayout, { repeatArea } from './BaseGrid';
import VehicleReference, { VehicleReferenceProps } from '../vehicleReference';
import Stack from '../stack';
import Link from '../link';
import { ArrowLeftIcon } from '../icons';

interface Props {
  title: string;
  backLink?: {
    text: string;
    url: string;
  };
  vehicle: VehicleReferenceProps;
}

const LayoutWithVehicleReference: FC<PropsWithChildren<Props>> = ({
  title,
  backLink,
  vehicle,
  children,
}) => {
  return (
    <BaseGridLayout
      templateAreas={{
        xs: `"backlink" "heading" "vehicle" "main"`,
        lg: `
            "${repeatArea(12, 'backlink')}"
            "${repeatArea(6, 'heading')} . ${repeatArea(5, 'vehicle')}"
            "${repeatArea(6, 'main')} . ${repeatArea(5, 'vehicle')}"`,
      }}
      gridTemplateRows="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
    >
      <GridItem area="backlink">
        {backLink ? (
          <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
            {backLink.text}
          </Link>
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
    </BaseGridLayout>
  );
};

export default LayoutWithVehicleReference;
