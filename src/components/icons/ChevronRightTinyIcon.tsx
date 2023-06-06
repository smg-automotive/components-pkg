import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronRightTinyIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronRightTiny',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron right tiny icon</title>
        <path
          d="M7.59 7.41L12.17 12L7.59 16.59L9 18L15 12L9 6L7.59 7.41Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
