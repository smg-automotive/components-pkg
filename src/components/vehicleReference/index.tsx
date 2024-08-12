import React, { ComponentProps, FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

import MissingImage from '../missingImage';
import AspectRatio from '../aspectRatio';

interface Props {
  image?: ReactNode;
  vehicleTitle: string;
  price?: string | null;
  sellerName?: string | null;
  sellerAddress?: string | null;
  callToAction?: ReactNode;
  direction?: ComponentProps<typeof Stack>['direction'];
}

const VehicleReference: FC<Props> = ({
  image,
  vehicleTitle,
  price,
  sellerName,
  sellerAddress,
  callToAction,
  direction = { '2xs': 'row', md: 'column' },
}) => {
  const styles = useMultiStyleConfig(`VehicleReference`);

  return (
    <article>
      <Stack direction={direction} spacing="md">
        <AspectRatio
          minW="2xl"
          ratio={4 / 3}
          borderRadius="sm"
          overflow="hidden"
        >
          {image ? image : <MissingImage />}
        </AspectRatio>
        <Stack spacing={{ '2xs': 'xs', md: 'md' }} justify="center">
          <chakra.h1 __css={styles.carTitle}>{vehicleTitle}</chakra.h1>
          <chakra.span __css={styles.price}>{price}</chakra.span>
          <Box>
            <chakra.p __css={styles.dealerName}>{sellerName}</chakra.p>
            <chakra.p __css={styles.dealerAddress}>{sellerAddress}</chakra.p>
          </Box>
        </Stack>
      </Stack>
      {callToAction ? (
        <Box marginTop={{ base: 'lg', md: 'sm' }}>{callToAction}</Box>
      ) : null}
    </article>
  );
};

export default VehicleReference;
export { Props as VehicleReferenceProps };
