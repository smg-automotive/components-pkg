import React, { FC } from 'react';

import { MissingImageIcon } from '../icons';
import Box from '../box';

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
