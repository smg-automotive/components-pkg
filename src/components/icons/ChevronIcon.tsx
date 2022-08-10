import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ChevronIcon = createIcon({
  displayName: 'Chevron',
  path: (
    <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2.9467 5.0601 5.0533 5.0533 5.06-5.0533 0.94 0.94-6 6-6-6 0.94667-0.94z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
