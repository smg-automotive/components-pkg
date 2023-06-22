import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronRightLargeIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronRightLarge',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron right large icon</title>
        <path
          d="M8.99996 21L7.57996 19.59L15.17 12L7.58996 4.42L8.99996 3L18 12L8.99996 21Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
