import React, { FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

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
    <Box maxW={{ xs: 'full', lg: '453px' }}>
      <Stack direction={{ xs: 'row', lg: 'column' }} spacing="md">
        <Box
          overflow="hidden"
          borderRadius="sm"
          maxW={{ xs: '102px', lg: '453px' }}
          maxH={{ xs: '64px', lg: '281px' }}
        >
          {renderImage}
        </Box>
        <Stack spacing={{ xs: 'xs', lg: 'md' }}>
          <chakra.h1 __css={styles.carTitle}>{carTitle}</chakra.h1>
          <chakra.span __css={styles.price}>{price}</chakra.span>
          <Box>
            <chakra.p __css={styles.dealerName}>{dealerName}</chakra.p>
            <chakra.p __css={styles.dealerAddress}>{dealerAddress}</chakra.p>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VehicleReference;
