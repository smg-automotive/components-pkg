import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ChevronLeftSmallIcon = createIcon({
  displayName: 'ChevronLeftLarge',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chevron left small icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5L7.00006 11.9999L14 18.9999L15.415 17.5849L9.83006 11.9999L15.415 6.415L14 5Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
