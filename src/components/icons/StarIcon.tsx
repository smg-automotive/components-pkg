import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const StarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Star',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Star icon</title>
      <path
        strokeWidth="2"
        d="M19 21L12 17.26L5 21L6.81 13.53L2 8H9L12 2L15 8H22L17.19 13.53L19 21Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
    stroke: 'currentColor',
  },
});
