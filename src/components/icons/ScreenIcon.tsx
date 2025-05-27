import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ScreenIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Screen',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Screen icon</title>
      <path
        fill="currentColor"
        d="M4 12V4h16v7l2-1V2H2v16h9v2H6l-1 2h14v-2h-6v-2h9v-6zm16 4H4v-2h16z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
