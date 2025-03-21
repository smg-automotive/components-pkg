import React, { FunctionComponent, PropsWithChildren } from 'react';

import Flex from '../flex';
import Box from '../box';

export const TenantSelectionModalLayout: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  return (
    <Box
      height={{ base: 'full', sm: 'auth0-height' }}
      maxH="100vh"
      overflowX="hidden"
      overflowY="scroll"
    >
      <Box height="full" overflowY="auto">
        <Flex
          direction="column"
          alignItems="center"
          gridGap="md"
          minHeight="full"
          padding="2xl"
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
};
