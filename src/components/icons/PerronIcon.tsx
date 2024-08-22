import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronDownLargeBoldIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'PerroIcon',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron Down Large Bold Icon</title>
        <path
          d="M5 9.41406L6.415 7.99906L12.0002 13.5842L17.5888 8.00299L18.9999 9.41412L12 16.4141L5 9.41406Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
