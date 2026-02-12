import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';
import { menuHeightConfig } from 'src/components/navigation/header/config/HeaderNavigationConfig';
import Box from 'src/components/box';
import logoMotoScout24 from 'src/assets/images/logo_ms24.svg';
import logoAutoScout24 from 'src/assets/images/logo_as24.svg';

type FocusedHeaderProps = {
  brand: Brand;
};

const FocusedHeader: FC<FocusedHeaderProps> = ({ brand }) => {
  const logo = brand === Brand.AutoScout24 ? logoAutoScout24 : logoMotoScout24;

  return (
    <Box
      width="full"
      borderBottomColor="gray.200"
      borderBottomWidth="1px"
      zIndex="header"
      position="relative"
      backgroundColor="white"
    >
      <Box
        maxWidth="container.2xl"
        height={menuHeightConfig}
        alignItems="center"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        px={{ base: 'sm', xs: 'lg', sm: '2xl' }}
      >
        <Image
          width={{ sm: '124px', base: '101px' }}
          height={{ sm: '30px', base: 'sm' }}
          src={logo}
          alt="Platform logo"
        />
      </Box>
    </Box>
  );
};

export default FocusedHeader;
