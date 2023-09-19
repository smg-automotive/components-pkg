import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MagnifierLargeIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'MagnifierLargeIcon',
    viewBox: '0 0 48 48',
    path: (
      <>
        <title>Magnifier icon</title>
        <path
          fill="currentColor"
          d="M27 5a16 16 0 0 0-12 26.61l-10 10L6.41 43l10-10A16 16 0 1 0 27 5zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
