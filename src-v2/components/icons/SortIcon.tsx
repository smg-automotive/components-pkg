import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SortIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Sort',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Sort icon</title>
      <path
        fill="currentColor"
        d="M20.59 14.094 18 16.684V6.504l-2 1v9.17l-2.59-2.58-1.41 1.41 5 5 5-5-1.41-1.41ZM12 9.504l-5-5-5 5 1.42 1.41L6 8.324v10.18l2-1v-9.17l2.59 2.58L12 9.504Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
