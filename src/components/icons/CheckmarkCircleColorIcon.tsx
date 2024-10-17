import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CheckmarkCircleColorIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'Checkmark',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Checkmark Circle Color</title>
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
          d="M9.75 15.1275L6.315 11.6925L5.25 12.75L9.75 17.25L18.75 8.25L17.6925 7.1925L9.75 15.1275Z"
          fill="white"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
