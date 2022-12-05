import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const BoatTrailerIcon = createIcon({
  displayName: 'BoatTrailer',
  viewBox: '0 0 24 24',
  path: (
    <>
      <circle
        cx="11.499"
        cy="17.502"
        r="2.501"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19.002 12-.722 4.33a2 2 0 0 1-1.974 1.672H14.5l1-6.002h3.502Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19.002 5.997-1 6.003"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 5.997h3.001M14.5 18.002h-.55M9.048 18.002H5.996"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
