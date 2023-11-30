import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowUpNarrowIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ArrowUpNarrow',
  viewBox: '0 0 5 10',
  path: (
    <>
      <title>Arrow up narrow icon</title>
      <path
        d="M1.71875 3.51172V9.39062C1.71875 9.52734 1.81641 9.625 1.95312 9.625H3.04688C3.16406 9.625 3.28125 9.52734 3.28125 9.39062V3.51172H4.17969C4.58984 3.51172 4.80469 3.00391 4.51172 2.71094L2.8125 1.03125C2.63672 0.835938 2.34375 0.835938 2.16797 1.03125L0.46875 2.71094C0.175781 3.00391 0.390625 3.51172 0.800781 3.51172H1.71875Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    height: 'sm',
    width: 'xs',
  },
});
