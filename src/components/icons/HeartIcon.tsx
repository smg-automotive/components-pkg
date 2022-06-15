import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const HeartIcon = createIcon({
  displayName: 'Heart',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.21 4.57001L20.14 4.50001C19.1201 3.52011 17.7558 2.98037 16.3416 2.99721C14.9273 3.01405 13.5763 3.58611 12.58 4.59001L12 5.17001L11.42 4.59001C10.4173 3.59686 9.0674 3.03309 7.65621 3.01816C6.24502 3.00322 4.88346 3.5383 3.86 4.51001L3.78 4.59001C3.2081 5.13246 2.7547 5.78744 2.44835 6.51372C2.14201 7.24 1.98935 8.02184 2 8.81001C1.98774 10.1247 2.47776 11.3944 3.37 12.36L12 21L20.63 12.36C21.1321 11.8184 21.5137 11.1765 21.7499 10.4767C21.986 9.77697 22.0713 9.03511 22 8.30001C21.8935 6.87585 21.2544 5.5441 20.21 4.57001Z"
        fill="currentColor"
      />
    </svg>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
