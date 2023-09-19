import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DriveSystemLargeIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'DriveSystemLargeIcon',
    viewBox: '0 0 48 48',
    path: (
      <>
        <title>Drive System icon</title>
        <path
          fill="currentColor"
          d="M11 40a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm21-16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"
        />
        <path
          fill="currentColor"
          d="M32 3a13 13 0 0 0-10.52 5.39l-.27.37-16.64 23.5a8 8 0 0 0 11 11.32L39.22 26.8A13 13 0 0 0 32 3zM11 43a6 6 0 0 1-4.9-9.45l.17-.23A6 6 0 1 1 11 43zm7.78-4.16A8 8 0 0 0 11 29a7.75 7.75 0 0 0-1.82.22L19 15.29V16a13 13 0 0 0 13 13h.72zM32 27a11 11 0 0 1-9.15-17.1l.15-.16A11 11 0 1 1 32 27z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
