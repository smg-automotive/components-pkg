import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CamperIcon = createIcon({
  displayName: 'Camper',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.102 11h1.9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.5"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.895 11h-1.9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.5"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.588 16.752h1M16.592 16.752h1M5.996 10.5V5.996a2 2 0 0 1 2-2h10.005a2 2 0 0 1 2 2V10.5M20.461 13H5.535"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.496 13.793v4.21a2 2 0 0 0 2 2h11.006a2 2 0 0 0 2-2v-4.21c0-.528-.052-1.053-.155-1.57l-.523-2.616a2.001 2.001 0 0 0-1.963-1.609H8.137c-.954 0-1.776.673-1.963 1.609l-.523 2.616a8.03 8.03 0 0 0-.155 1.57Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.234 20.003v1.5a1 1 0 0 1-1 1.001H7.232a1 1 0 0 1-1-1v-1.957M19.765 19.547v1.957a1 1 0 0 1-1 1h-1a1 1 0 0 1-1.001-1v-1.5"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
