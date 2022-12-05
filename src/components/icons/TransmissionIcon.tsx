import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const TransmissionIcon = createIcon({
  displayName: 'Transmission',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.21 18.86 21.64 21M4 7v10M21.414 3.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 7v3a2 2 0 0 1-2 2H4M13.414 3.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M5.414 3.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M13.414 17.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M5.414 17.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M12 7v10M18.07 18.859h2.14a1.43 1.43 0 0 0 0-2.859h-2.14v5"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
