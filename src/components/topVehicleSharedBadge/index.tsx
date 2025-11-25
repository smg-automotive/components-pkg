import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { AspectRatio } from '../aspectRatio';

type Props = {
  aspectRatio?: number;
  brand: Brand;
};

const badgeText = {
  [Brand.AutoScout24]: 'TopCar',
  [Brand.MotoScout24]: 'TopMoto',
};

export const TopVehicleSharedBadge: FC<PropsWithChildren<Props>> = ({
  children,
  aspectRatio,
  brand,
}) => {
  return (
    <Box>
      <Box
        w="full"
        textAlign="center"
        textStyle="heading4"
        p="xs"
        color="gray.900"
      >
        {badgeText[brand as Brand]}
      </Box>
      {aspectRatio ? (
        <AspectRatio ratio={aspectRatio}>{children}</AspectRatio>
      ) : (
        children
      )}
    </Box>
  );
};
