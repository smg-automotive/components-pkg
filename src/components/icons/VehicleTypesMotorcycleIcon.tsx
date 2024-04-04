import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VehicleTypesMotorcycleIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'VehicleTypesMotorcycle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Vehicle types motorcycle icon</title>
        <path
          fill="currentColor"
          d="m17 4-2 3.12V6a3 3 0 0 0-6 0v1L7 4H3l1 2h1.92l2.16 3.22A4 4 0 0 0 8 10l-2 3v4h3v4h6v-4h3v-4l-2-3q0-.324-.06-.64L18.1 6H20l1-2zM9 15H8v-1.4l.8-1.2.2.24zm2-9a1 1 0 0 1 2 0v.13a3.83 3.83 0 0 0-2 0zm2 13h-2v-5.13a3.9 3.9 0 0 0 2 0zm-1-7a2 2 0 0 1-2-2 1.94 1.94 0 0 1 .55-1.37 2 2 0 0 1 2.9 0c.357.366.554.859.55 1.37a2 2 0 0 1-2 2m4 1.6V15h-1v-2.36l.2-.24z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
