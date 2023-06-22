import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const RangeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Range',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Range icon</title>
      <path
        fill="currentColor"
        d="M7 21h3l1-2H8l-1 2Zm6 0h3l1-2h-3l-1 2Zm-9-4H2v6h2v-2h1l1-2H4v-2Zm16 0v2h-1l-1 2h2v2h2v-6h-2Zm-1-9A7 7 0 1 0 5 8c0 4.34 5.71 9.23 6.36 9.77l.64.53.64-.53C13.29 17.23 19 12.34 19 8Zm-7 7.67C10.18 14 7 10.55 7 8a5 5 0 1 1 10 0c0 2.55-3.18 6-5 7.67Z"
      />
      <path
        fill="currentColor"
        d="M12 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
