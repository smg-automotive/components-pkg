import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ArrowLeftIcon = createIcon({
  displayName: 'ArrowLeft',
  path: (
    <path
      d="M22 11H5.83L12.41 4.41L11 3L2 12L11 21L12.41 19.59L5.83 13H21L22 11Z"
      fill="currentColor"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
