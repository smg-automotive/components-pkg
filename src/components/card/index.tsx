import React, { FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  renderImage: () => ReactNode;
  carTitle: string;
  price: string;
  dealerName: string;
  dealerAddress: string;
}

const Card: FC<Props> = ({
  renderImage,
  carTitle,
  price,
  dealerName,
  dealerAddress,
}) => {
  const styles = useMultiStyleConfig(`Card`);

  return (
    <Box maxW={{ xs: 'full', lg: '453px' }}>
      <Stack direction={{ xs: 'row', lg: 'column' }} spacing="md">
        <Box
          overflow="hidden"
          borderRadius="sm"
          maxW={{ xs: '102px', lg: '453px' }}
          maxH={{ xs: '64px', lg: '281px' }}
        >
          {renderImage()}
        </Box>
        <Stack spacing={{ xs: 'sm', lg: 'md' }}>
          <chakra.span __css={styles.carTitle}>{carTitle}</chakra.span>
          <chakra.span __css={styles.price}>{price}</chakra.span>
          <Box>
            <chakra.span __css={styles.dealerName}>{dealerName}</chakra.span>
            <chakra.span __css={styles.dealerAddress}>
              {dealerAddress}
            </chakra.span>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
