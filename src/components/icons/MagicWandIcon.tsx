import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const MagicWandIcon = createIcon({
  displayName: 'MagicWand',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Magic wand icon</title>
      <path
        stroke="currentColor"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="m18.033 3.033-1.067-1.066a1.01 1.01 0 0 0-1.433 0L1.967 15.533a1.007 1.007 0 0 0 0 1.434l1.066 1.066a1 1 0 0 0 1.434 0L18.033 4.466a1 1 0 0 0 0-1.433m-6.366 2.801 2.5 2.5M4.167 5v3.333m11.667 3.334V15m-7.5-13.333v1.666M5.833 6.667H2.5m15 6.667h-3.334M9.167 2.5H7.5"
      />
    </>
  ),
  defaultProps: {
    flexShrink: 0,
    display: 'inline-block',
    boxSize: 'sm',
  },
});
