import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ConsumptionIcon = createIcon({
  displayName: 'Consumption',
  viewBox: '0 0 24 24',
  path: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m13.203 4.64 3.603 5.13c1.36 1.94 1.575 4.528.559 6.692C16.349 18.625 14.273 19.994 12 20v0c-2.273-.006-4.349-1.375-5.365-3.538-1.017-2.164-.8-4.753.56-6.691l3.602-5.13C11.081 4.236 11.527 4 12 4c.473 0 .919.237 1.203.64Z"
      clipRule="evenodd"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
