import React, { FC, ReactNode } from 'react';

import {
  AspectRatio,
  Box,
  chakra,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  renderImage: ReactNode;
  carTitle: string;
  price: string;
  dealerName: string;
  dealerAddress: string;
}

const VehicleReference: FC<Props> = ({
  renderImage,
  carTitle,
  price,
  dealerName,
  dealerAddress,
}) => {
  const styles = useMultiStyleConfig(`VehicleReference`);

  return (
    <Stack direction={{ xs: 'row', lg: 'column' }} spacing="md">
      <AspectRatio minW="2xl" ratio={4 / 3} borderRadius="sm" overflow="hidden">
        {renderImage}
      </AspectRatio>
      <Stack spacing={{ xs: 'xs', lg: 'md' }} justify="center">
        <chakra.h1 __css={styles.carTitle}>{carTitle}</chakra.h1>
        <chakra.span __css={styles.price}>{price}</chakra.span>
        <Box>
          <chakra.p __css={styles.dealerName}>{dealerName}</chakra.p>
          <chakra.p __css={styles.dealerAddress}>{dealerAddress}</chakra.p>
        </Box>
      </Stack>
    </Stack>
  );
};

export default VehicleReference;
