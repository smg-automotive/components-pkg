import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const CheckmarkIcon = createIcon({
  displayName: 'Checkmark',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Checkmark icon</title>
      <path
        d="m9 16.17-4.58-4.58L3 13l6 6L21 7l-1.41-1.41L9 16.17Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
