import React, { ComponentProps, FC, ReactNode } from 'react';

import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { Stack } from '../stack';
import { MissingImage } from '../missingImage';
import { Grid } from '../grid';
import { Box } from '../box';
import { AspectRatio } from '../aspectRatio';

export type VehicleReferenceProps = {
  image?: ReactNode;
  vehicleTitle: string;
  price?: string | null;
  sellerName?: string | null;
  sellerAddress?: string | null;
  callToAction?: ReactNode;
  templateColumns?: ComponentProps<typeof Grid>['templateColumns'];
};

export const VehicleReference: FC<VehicleReferenceProps> = ({
  templateColumns = { base: 'auto 1fr', md: '1fr' },
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'VehicleReference' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const {
    image,
    vehicleTitle,
    price,
    sellerName,
    sellerAddress,
    callToAction,
  } = componentProps;

  return (
    <Box as="article">
      <Grid templateColumns={templateColumns} gap="md">
        <AspectRatio
          minW="2xl"
          ratio={4 / 3}
          borderRadius="sm"
          overflow="hidden"
        >
          {image ? image : <MissingImage />}
        </AspectRatio>
        <Stack
          gap={{ base: 'xs', md: 'md' }}
          justify={{ base: 'center', md: 'space-between' }}
        >
          <chakra.p css={styles.carTitle}>{vehicleTitle}</chakra.p>
          <chakra.span css={styles.price}>{price}</chakra.span>
          <Box>
            <chakra.p css={styles.dealerName}>{sellerName}</chakra.p>
            <chakra.p css={styles.dealerAddress}>{sellerAddress}</chakra.p>
          </Box>
        </Stack>
      </Grid>
      {callToAction ? (
        <Box marginTop={{ base: 'lg', md: 'sm' }}>{callToAction}</Box>
      ) : null}
    </Box>
  );
};
