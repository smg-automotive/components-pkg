import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ExchangeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Exchange',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Exchange icon</title>
      <path
        fill="currentColor"
        d="M13.59 3.41 16.18 6H6l1 2h9.17l-2.58 2.59L15 12l5-5-5-5-1.41 1.41ZM9 12l-5 5 5 5 1.41-1.42L7.82 18H18l-1-2H7.83l2.58-2.59L9 12Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
