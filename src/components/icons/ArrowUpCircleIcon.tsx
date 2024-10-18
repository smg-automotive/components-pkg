import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowUpCircleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Arrow Up Circle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow Up Circle</title>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M18 11.3334L12 5.33337L6 11.3334L6.94 12.2734L11.3333 7.88671V18.6667L12.6667 18V7.88671L17.06 12.2734L18 11.3334Z"
        fill="white"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
