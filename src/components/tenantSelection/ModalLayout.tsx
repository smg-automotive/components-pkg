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
      overflowY="auto"
      paddingX="2xl"
      paddingY={{ base: '3xl', sm: '2xl' }}
      color="gray.900"
    >
      <Flex
        direction="column"
        alignItems="center"
        gridGap="md"
        minHeight="full"
      >
        {children}
      </Flex>
    </Box>
  );
};
