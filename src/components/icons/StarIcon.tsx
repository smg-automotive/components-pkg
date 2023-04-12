import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const StarIcon = createIcon({
  displayName: 'Star',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Star icon</title>
      <path
        d="M19 21L12 17.26L5 21L6.81 13.53L2 8H9L12 2L15 8H22L17.19 13.53L19 21ZM12 15L16 17.21L15 13L17.64 10H13.77L12 6.49L10.23 10H6.35L9 13L8 17.19L12 15Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
    stroke: 'currentColor',
  },
});
