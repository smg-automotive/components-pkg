import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const UtilityVehicleIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'UtilityVehicle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Utility vehicle icon</title>
        <path
          fill="currentColor"
          d="M19 5h-3V3H1v17h3.18a3 3 0 0 0 5.64 0h4.36a3 3 0 0 0 5.64 0H23V9a4 4 0 0 0-4-4ZM7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-2h-1.18a3 3 0 0 0-5.64 0H9.82a3 3 0 0 0-5.64 0H3v-4h8l1-2H3V5h11v9h7v4Zm0-6h-5V7h3a2 2 0 0 1 2 2v3Z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
