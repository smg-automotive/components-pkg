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
        d="M9.59 1.41 12.18 4H2l1 2h9.17L9.59 8.59 11 10l5-5-5-5-1.41 1.41ZM5 10l-5 5 5 5 1.41-1.42L3.82 16H14l-1-2H3.83l2.58-2.59L5 10Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
