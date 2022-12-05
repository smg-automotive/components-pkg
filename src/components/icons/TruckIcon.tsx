import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const TruckIcon = createIcon({
  displayName: 'Truck',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.975 19.503H16.5"
      />
      <circle
        cx="18.001"
        cy="19.503"
        r="1.501"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="6.475"
        cy="19.503"
        r="1.501"
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
        d="M2.994 14.862H15.5a.5.5 0 0 0 .5-.5V7.997a2 2 0 0 0-2-2H4.995a2 2 0 0 0-2 2v10.504a1 1 0 0 0 1 1h.978"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 7.998h3.248c1.053 0 1.993.66 2.351 1.65l1.284 3.544c.08.218.12.449.12.681v4.13a1.5 1.5 0 0 1-1.5 1.5H19.5"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.003 14h-3.001l-.708-.707a1 1 0 0 0-.707-.293H16"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
