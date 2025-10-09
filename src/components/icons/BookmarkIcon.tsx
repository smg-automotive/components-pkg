import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const BookmarkIcon = createIcon({
  displayName: 'Bookmark',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Bookmark icon</title>
      <path
        fill="currentColor"
        d="m16 17-4-4-4 4V4h10V2H6v20l6-6 6 6V5l-2 1z"
      />
      <path d="M18 1.99H6v20l6-6 6 6z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
