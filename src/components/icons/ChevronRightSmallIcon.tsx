import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronRightSmallIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'ChevronRightSmall',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Chevron right small icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5L16.9999 11.9999L9.99996 18.9999L8.58496 17.5849L14.1699 11.9999L8.58503 6.415L10 5Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
