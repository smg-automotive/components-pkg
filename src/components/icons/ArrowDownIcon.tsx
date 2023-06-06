import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ArrowDownIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ArrowDown',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow down icon</title>
      <path
        fill="currentColor"
        d="M19.59 11.59 13 18.17V2l-2 1v15.17l-6.59-6.58L3 13l9 9 9-9-1.41-1.41Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
