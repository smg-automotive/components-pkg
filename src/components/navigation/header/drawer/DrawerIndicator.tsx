import React, { FC } from 'react';

import { ChevronDownSmallIcon } from 'src/components/icons';
import { Box } from 'src/components/box';

export const DrawerIndicator: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Box hideBelow="xs" display="inline-flex">
      <ChevronDownSmallIcon
        transition="transform"
        transitionDuration="fast"
        color={isOpen ? 'blue.700' : 'currentColor'}
        transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
      />
    </Box>
  );
};
