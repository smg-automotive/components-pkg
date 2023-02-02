import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import missingImage from 'src/assets/images/missingImage.png';

import Box from '../box';

const MissingImage: FC = () => {
  return (
    <Box backgroundColor="gray.50">
      <chakra.img
        data-testid="missing-image"
        src={missingImage}
        alt="image missing"
        width="lg"
        height="lg"
        objectFit="cover"
      />
    </Box>
  );
};

export default MissingImage;
