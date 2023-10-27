import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CartIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Cart',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Cart icon</title>
      <path
        fill="currentColor"
        d="M17 16a3 3 0 0 0-2.82 2H8.82A3 3 0 0 0 7 16.18V14h10l4-8H7V3.74L3.9 2.19 3 4l2 1v11.2A3 3 0 1 0 8.82 20h5.36A3 3 0 1 0 17 16ZM7 8h10.76l-2 4H7V8ZM6 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
