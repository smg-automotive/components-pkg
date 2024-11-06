import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const PlusCircleIcon = createIcon({
  displayName: 'PlusCircle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Plus circle icon</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        fill="none"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v8M8 12h8"
        fill="none"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
