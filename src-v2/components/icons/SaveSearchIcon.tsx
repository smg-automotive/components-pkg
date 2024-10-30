import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SaveSearchIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'SaveSearch',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Save search icon</title>
      <path
        fill="currentColor"
        d="M7 16v-5a5 5 0 1 1 10 0v4l2-1v-3a7 7 0 0 0-6-6.92V2l-2 1v1.08A7 7 0 0 0 5 11v5H3v2h6v1a3 3 0 0 0 6 0v-1h6v-2H7Zm6 3a1 1 0 0 1-2 0v-1h2v1Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
