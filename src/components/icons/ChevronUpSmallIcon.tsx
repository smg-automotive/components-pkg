import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ChevronUpSmallIcon = createIcon({
  displayName: 'ChevronUpSmall',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chevron up small icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
