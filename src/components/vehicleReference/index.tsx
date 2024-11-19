import React, { ComponentProps, FC, ReactNode } from 'react';
import {
  chakra,
  type RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { vehicleReferenceRecipe } from 'src/themes/shared/slotRecipes/vehicleReference';

import { Stack } from '../stack';
import { MissingImage } from '../missingImage';
import { Grid } from '../grid';
import { Box } from '../box';
import { AspectRatio } from '../aspectRatio';

type VehicleReferenceVariantProps = RecipeVariantProps<
  typeof vehicleReferenceRecipe
>;
export type VehicleReferenceProps = VehicleReferenceVariantProps & {
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
  const recipe = useSlotRecipe({ key: 'vehicleReference' });
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
