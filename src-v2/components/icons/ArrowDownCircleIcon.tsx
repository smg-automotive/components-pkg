import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowDownCircleIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'Arrow Down Circle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Arrow Down Circle</title>
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
          d="M17.06 11.7267L12.6667 16.1134V5.33337L11.3333 6.00004V16.1134L6.94 11.7267L6 12.6667L12 18.6667L18 12.6667L17.06 11.7267Z"
          fill="white"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
