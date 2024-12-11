import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const InfoIcon = createIcon({
  displayName: 'Info',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Info icon</title>
      <path
        d="M20 10a8 8 0 1 0-12 6.918V22h8v-5.082A7.998 7.998 0 0 0 20 10Zm-6 10h-4v-2.263c1.31.351 2.69.351 4 0V20Zm-1-4.09V11h2V9H9v2h2v4.91a6 6 0 1 1 2 0Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
