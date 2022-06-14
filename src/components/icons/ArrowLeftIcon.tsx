import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ArrowLeftIcon = createIcon({
  displayName: 'ArrowLeft',
  path: (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 11H5.83L12.41 4.41L11 3L2 12L11 21L12.41 19.59L5.83 13H21L22 11Z"
        fill="currentColor"
      />
    </svg>
  ),
  defaultProps: {
    boxSize: '1.5rem',
  },
});
