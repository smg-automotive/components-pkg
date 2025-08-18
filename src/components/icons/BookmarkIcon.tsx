import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const BookmarkIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Bookmark',
  viewBox: '0 0 12 20',
  path: (
    <>
      <title>Bookmark icon</title>
      <path
        fill="#333"
        d="m10 14.99-4-4-4 4v-13h10v-2H0v20l6-6 6 6v-17l-2 1z"
      />
      <path d="M12-.01H0v20l6-6 6 6z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
