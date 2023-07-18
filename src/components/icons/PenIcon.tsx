import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PenIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Pen',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Pen icon</title>
      <path
        fill="currentColor"
        d="M16.58 2 2 16.59V22h5.41L22 7.42 16.58 2Zm2.58 5.41-1.87 1.88-2.58-2.58 1.87-1.87 2.58 2.57ZM6.59 20H4v-2.59l9.29-9.29 2.59 2.59L6.59 20Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
