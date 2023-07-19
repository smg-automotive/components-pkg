import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const AdvancedSearchIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'AdvancedSearch',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Advanced Search Icon</title>
        <path
          fill="currentColor"
          d="M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm9 8a3 3 0 1 0-5.999 0A3 3 0 0 0 18 12Zm-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5-1h3v2h-3v-2Zm-5-7-1 2h9V4h-8Zm-3 7H2v2h8l1-2ZM2 4h3v2H2V4Zm7 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0h9v-2h-8l-1 2ZM2 18h3v2H2v-2Z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
