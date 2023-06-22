import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronLeftLargeIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronLeftLarge',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron left large icon</title>
        <path
          d="M15 21L16.41 19.59L8.83 12L16.41 4.42L15 3L6 12L15 21Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
