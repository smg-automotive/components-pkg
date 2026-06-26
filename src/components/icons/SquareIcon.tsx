import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const SquareIcon = createIcon({
  displayName: 'Square',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Square icon</title>
      <rect x="3" y="3" width="18" height="18" fill="currentColor" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
