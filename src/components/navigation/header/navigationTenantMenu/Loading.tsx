import React, { FC } from 'react';

import Spinner from 'src/components/spinner';
import Box from 'src/components/box';

export const NavigationTenantMenuLoading: FC = () => (
  <>
    <Box
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      bg="gray.900"
      opacity="0.7"
    />
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Spinner />
    </Box>
  </>
);
