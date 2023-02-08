import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CloseIcon = createIcon({
  displayName: 'Close',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Close icon</title>
      <path
        d="M21 4.41L19.58 3L12 10.58L4.41 3L3 4.41L10.58 12L3 19.58L4.41 21L12 13.42L19.58 21L21 19.58L13.42 12L21 4.41Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
