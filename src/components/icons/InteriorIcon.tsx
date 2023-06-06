import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const InteriorIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Interior',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>Interior icon</title>
      <path
        fill="currentColor"
        d="M14 11h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 0 6Zm-4-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Zm29 37H15l1-2h23v2Zm0-12H23l-1 2h17a2 2 0 0 1 0 4H16.768l-6.42-24H14a1.996 1.996 0 0 1 1.901 1.381L20.332 29H36l1-2H21.785l-3.981-12.238A3.99 3.99 0 0 0 14 12H7.743l7.49 28H39a4 4 0 1 0 0-8Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
