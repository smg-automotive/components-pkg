import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const BicycleIcon = createIcon({
  displayName: 'Bicycle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.567 11.94 1.56-1.85 6.874-2.091-5.002 7.003H4.996l2.571-3.062Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.998 15.001a4.011 4.011 0 1 1-1.431-3.061"
      />
      <circle
        cx="19.002"
        cy="15.001"
        r="4.002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m16 5.997 2-1M19.001 15.001 16 5.998M6.996 6.998h3.001"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 7.999 11 15.002H4.996l4.132-4.916L16 8Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 15.001 7.997 6.998"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
