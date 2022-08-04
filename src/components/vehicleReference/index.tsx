import React, { FC, ReactNode, Suspense } from 'react';

import {
  AspectRatio,
  Box,
  chakra,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import Stack from '../stack';
import { lazy } from '../../lib';

const MissingImage = lazy(async () => import('../icons'), 'MissingImage');

interface Props {
  image?: ReactNode;
  vehicleTitle: string;
  price: string;
  sellerName: string;
  sellerAddress: string;
}

const VehicleReference: FC<Props> = ({
  image,
  vehicleTitle,
  price,
  sellerName,
  sellerAddress,
}) => {
  const styles = useMultiStyleConfig(`VehicleReference`);

  return (
    <article>
      <Stack direction={{ xs: 'row', lg: 'column' }} spacing="md">
        <AspectRatio
          minW="2xl"
          ratio={4 / 3}
          borderRadius="sm"
          overflow="hidden"
        >
          {image ? (
            image
          ) : (
            <Suspense>
              <MissingImage />
            </Suspense>
          )}
        </AspectRatio>
        <Stack spacing={{ xs: 'xs', lg: 'md' }} justify="center">
          <chakra.h1 __css={styles.carTitle}>{vehicleTitle}</chakra.h1>
          <chakra.span __css={styles.price}>{price}</chakra.span>
          <Box>
            <chakra.p __css={styles.dealerName}>{sellerName}</chakra.p>
            <chakra.p __css={styles.dealerAddress}>{sellerAddress}</chakra.p>
          </Box>
        </Stack>
      </Stack>
    </article>
  );
};

export default VehicleReference;
