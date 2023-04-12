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
        d="m5 15 1.415 1.415L12 10.83l5.589 5.581L18.999 15 12 8l-7 7Z"
        fill="#currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
