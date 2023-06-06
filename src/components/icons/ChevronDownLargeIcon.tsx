import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronDownLargeIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronDownLarge',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron down large icon</title>
        <path
          d="M4.42 7.59 12 15.17l7.59-7.58L21 9l-9 9-9-9 1.42-1.41Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
