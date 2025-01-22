import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../box';

export const FullHeight: FC<PropsWithChildren> = ({ children }) => (
  <Box minHeight="screen-height" height="screen-height">
    {children}
  </Box>
);

export { PropsWithChildren as FullHeightProps };
