import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TiltedRectangleIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'TiltedRectangle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Tilted rectangle icon</title>
        <rect
          width="14.969"
          height="14.969"
          x="1.144"
          y="11.727"
          stroke="currentColor"
          strokeWidth="2"
          rx="2"
          transform="rotate(-45 1.144 11.727)"
          fill="none"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
