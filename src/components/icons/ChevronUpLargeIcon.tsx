import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronUpLargeIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'ChevronUpLarge',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron up large icon</title>
        <path
          d="M19.59 16.41L12 8.83L4.42 16.41L3 15L12 6L21 15L19.59 16.41Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
