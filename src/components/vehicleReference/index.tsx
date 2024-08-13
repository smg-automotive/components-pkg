import React, { ComponentProps, FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

import MissingImage from '../missingImage';
import Grid from '../grid';
import AspectRatio from '../aspectRatio';

interface Props {
  image?: ReactNode;
  vehicleTitle: string;
  price?: string | null;
  sellerName?: string | null;
  sellerAddress?: string | null;
  callToAction?: ReactNode;
  templateColumns?: ComponentProps<typeof Grid>['templateColumns'];
}

const VehicleReference: FC<Props> = ({
  image,
  vehicleTitle,
  price,
  sellerName,
  sellerAddress,
  callToAction,
  templateColumns = { base: '96px 1fr', md: '1fr' },
}) => {
  const styles = useMultiStyleConfig(`VehicleReference`);

  return (
    <Grid as="article" templateColumns={templateColumns} gap="md">
      <AspectRatio ratio={4 / 3} borderRadius="sm" overflow="hidden">
        {image ? image : <MissingImage />}
      </AspectRatio>
      <Stack spacing={{ base: 'xs', md: 'md' }} justify="center">
        <chakra.h1 __css={styles.carTitle}>{vehicleTitle}</chakra.h1>
        <chakra.span __css={styles.price}>{price}</chakra.span>
        <Box>
          <chakra.p __css={styles.dealerName}>{sellerName}</chakra.p>
          <chakra.p __css={styles.dealerAddress}>{sellerAddress}</chakra.p>
        </Box>
      </Stack>
      {callToAction ? (
        <Box marginTop={{ base: 'lg', md: 'sm' }}>{callToAction}</Box>
      ) : null}
    </Grid>
  );
};

export default VehicleReference;
export { Props as VehicleReferenceProps };
