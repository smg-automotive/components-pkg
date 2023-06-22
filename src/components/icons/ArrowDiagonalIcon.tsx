import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowDiagonalIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ArrowDiagonal',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow diagonal icon</title>
      <path
        d="M6.34312 5.31851V7.31255L15.6557 7.31962L4.9289 18.0464L5.63601 20.1677L17.0699 8.73383L17.077 18.0464H19.071V5.31851H6.34312Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
