import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const RoadIcon = createIcon({
  displayName: 'Road',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.413 15.234 3.495 4.98a.502.502 0 0 1-.515.779L12 20.302l-3.397.691a.5.5 0 0 1-.513-.776l3.496-4.983a.506.506 0 0 1 .827 0Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.003 18.003 18.002 4.998M2.996 18.003 5.997 4.998M12 2.997v2M12 8.999v2"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
