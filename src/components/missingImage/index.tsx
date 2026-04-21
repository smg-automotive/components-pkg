import React, { FC } from 'react';

import { MissingImageIcon } from '@/src/components/icons';
import Box from '@/src/components/box';

const MissingImage: FC = () => {
  return (
    <Box backgroundColor="gray.50">
      <MissingImageIcon
        data-testid="missing-image"
        boxSize="lg"
        color="gray.300"
      />
    </Box>
  );
};

export default MissingImage;
