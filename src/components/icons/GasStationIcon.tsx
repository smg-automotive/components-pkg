import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const GasStationIcon = createIcon({
  displayName: 'GasStation',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.5 7h6v4h-6V7Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.5 15h4M3.5 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M19.5 5l1.414 1.414a2 2 0 0 1 .586 1.414V17.5A1.5 1.5 0 0 1 20 19v0a1.5 1.5 0 0 1-1.5-1.5V16a1 1 0 0 0-1-1h-2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.5 12h-1.867a1 1 0 0 1-.992-1.124l.25-2A1 1 0 0 1 19.883 8H21.5M2.5 21h14"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
