import React from 'react';
import { createIcon, IconProps } from '@chakra-ui/react';

type StarProps = IconProps & {
  fill?: 'none';
  stroke?: 'currentColor';
};

export const StarIcon = createIcon({
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
  } as StarProps,
});
