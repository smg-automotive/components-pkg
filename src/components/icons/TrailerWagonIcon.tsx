import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const TrailerWagonIcon = createIcon({
  displayName: 'TrailerWagon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 7h14.535l4 6H23v2H9.828a3 3 0 0 1-5.656 0H1V7Zm14 6h2.131l-2.666-4H3v4h1.172a3 3 0 0 1 5.656 0H15Zm-7.293 1.707a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"
      clipRule="evenodd"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
