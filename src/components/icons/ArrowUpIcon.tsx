import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowUpIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ArrowUp',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow up icon</title>
      <path
        fill="currentColor"
        d="m21 11-9-9-9 9 1.41 1.41L11 5.83V22l2-1V5.83l6.59 6.58L21 11Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
