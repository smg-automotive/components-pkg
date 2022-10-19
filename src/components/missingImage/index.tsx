import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import Box from '../box';
import missingImage from '../../assets/images/missingImage.png';

const MissingImage: FC = () => {
  return (
    <Box backgroundColor="gray.50">
      <chakra.img
        data-testid="missing-image"
        src={missingImage}
        alt="image missing"
        width={48}
        height={48}
        objectFit="cover"
      />
    </Box>
  );
};

export default MissingImage;
