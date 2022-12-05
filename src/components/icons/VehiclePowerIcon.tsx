import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const VehiclePowerIcon = createIcon({
  displayName: 'VehiclePower',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.364 5.636a9 9 0 0 1 0 12.728 9 9 0 1 1 0-12.728"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.413 19.031a3.213 3.213 0 0 0-.804-1.172A3.209 3.209 0 0 0 14.424 17H9.576a3.225 3.225 0 0 0-2.99 2.031M13.414 10.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M12 3v2M16.5 4.21l-.87 1.5M7.5 4.21l.87 1.5M4.21 7.5l1.5.87M21 12h-1.5M4.5 12H3M13.79 11.13l6-3.63"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
