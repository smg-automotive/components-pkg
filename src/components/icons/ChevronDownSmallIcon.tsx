import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronDownSmallIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronDownSmall',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron down small icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 9.415 6.415 8 12 13.585l5.589-5.581 1.41 1.411-6.999 7-7-7Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
