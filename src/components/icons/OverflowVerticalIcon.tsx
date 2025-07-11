import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const OverflowVerticalIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'OverflowVertical',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Overflow vertical icon</title>
        <path
          fill="currentColor"
          d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
