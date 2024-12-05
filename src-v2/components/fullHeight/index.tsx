import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

const FullHeight: FC<PropsWithChildren> = ({ children }) => (
  <Box minHeight="100vh" height="100vh">
    {children}
  </Box>
);

export default FullHeight;
export { PropsWithChildren as FullHeightProps };
