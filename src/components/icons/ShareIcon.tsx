import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ShareIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Share',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Share icon</title>
      <path
        fill="currentColor"
        d="M17 14a4 4 0 0 0-2.94 1.31l-4.18-2.42A4 4 0 0 0 10 12a4.077 4.077 0 0 0-.12-1l4.18-2.38A4 4 0 0 0 17 10a4.06 4.06 0 1 0-3.88-3.08L8.94 9.28A4 4 0 0 0 2 12a4 4 0 0 0 4 4 4.001 4.001 0 0 0 2.94-1.31L13.12 17a4.084 4.084 0 0 0-.12 1 4 4 0 1 0 4-4zm0-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm11 6a2 2 0 1 1 0-3.999 2 2 0 0 1 0 4z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
