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
        d="M9.59 1.41L12.18 4H2L3 6H12.17L9.59 8.59L11 10L16 5L11 0L9.59 1.41Z"
        fill="currentColor"
      />
      <path
        d="M5 10L0 15L5 20L6.41 18.58L3.82 16H14L13 14H3.83L6.41 11.41L5 10Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
