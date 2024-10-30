import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CheckmarkCircleIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'CheckmarkCircle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Checkmark circle icon</title>
        <path
          d="M6.444 20.315a10 10 0 1 0 11.112-16.63 10 10 0 0 0-11.112 16.63zM7.555 5.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304zM7.01 12.42 11 16.41l7-6.99L16.58 8 11 13.59l-2.58-2.58-1.41 1.41z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
