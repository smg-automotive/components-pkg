import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const ArrowLeftIcon = createIcon({
  displayName: 'ArrowLeft',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow left icon</title>
      <path
        d="M22 11H5.83l6.58-6.59L11 3l-9 9 9 9 1.41-1.41L5.83 13H21l1-2Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
