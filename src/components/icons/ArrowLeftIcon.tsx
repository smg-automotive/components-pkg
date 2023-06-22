import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowLeftIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ArrowLeft',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow left icon</title>
      <path
        d="M22 11H5.83l6.58-6.59L11 3l-9 9 9 9 1.41-1.41L5.83 13H21l1-2Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
