import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChartIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ChartIcon',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>Chart icon</title>

      <path d="M7 39.5v-32l-2 1v33h38v-2H7z" fill="currentColor" />
      <path
        d="M21.04 22.91 27 28.87l11-11.04v8.67h2v-12H28v2h8.51L27 26.04l-5.96-5.95-11.03 10.99 1.41 1.42 9.62-9.59z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
