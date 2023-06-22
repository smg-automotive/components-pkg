import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const HeartIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Heart',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Heart icon</title>
      <path
        strokeWidth="2"
        d="m20.21 4.57-.07-.07a5.39 5.39 0 0 0-7.56.09l-.58.58-.58-.58a5.43 5.43 0 0 0-7.56-.08l-.08.08A5.71 5.71 0 0 0 2 8.81a5.16 5.16 0 0 0 1.37 3.55L12 21l8.63-8.64A5.229 5.229 0 0 0 22 8.3a5.68 5.68 0 0 0-1.79-3.73Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
    stroke: 'currentColor',
  },
});
