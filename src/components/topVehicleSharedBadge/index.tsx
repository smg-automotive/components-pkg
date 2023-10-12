import React, { FC, PropsWithChildren } from 'react';
import { Box, useTheme } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import AspectRatio from '../aspectRatio';

type Props = {
  aspectRatio?: number;
};

const badgeText = {
  [Brand.AutoScout24]: 'TopCar',
  [Brand.MotoScout24]: 'TopMoto',
};

const TopVehicleSharedBadge: FC<PropsWithChildren<Props>> = ({
  children,
  aspectRatio,
}) => {
  const { brand } = useTheme();

  return (
    <Box>
      <Box
        w="full"
        textAlign="center"
        fontWeight="bold"
        color="blue.700"
        p="xxs"
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

export default TopVehicleSharedBadge;
