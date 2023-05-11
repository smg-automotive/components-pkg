import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ChevronUpLargeIcon = createIcon({
  displayName: 'ChevronUpLarge',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chevron up large icon</title>
      <path
        d="M5 15L6.415 16.415L12.0002 10.8298L17.5888 16.4111L18.9999 14.9999L12 8L5 15Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
