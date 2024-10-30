import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DriveSystemIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'DriveSystem',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Drive system icon</title>
      <path
        fill="currentColor"
        d="M16 1a7 7 0 0 0-5.94 3.31l-8.34 12.4A3.92 3.92 0 0 0 1 19a4 4 0 0 0 6.23 3.32l12.67-8.5A7 7 0 0 0 16 1ZM5.26 15l3.86-5.72a7 7 0 0 0 5.61 5.6L9 18.74A4 4 0 0 0 5.26 15ZM3 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm13-6a5 5 0 1 1 0-9.999 5 5 0 0 1 0 10Z"
      />
      <path
        fill="#333"
        d="M16 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
