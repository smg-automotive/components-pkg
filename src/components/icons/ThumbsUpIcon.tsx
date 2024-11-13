import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ThumbsUpIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Thumbs up',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Thumbs up icon</title>
      <path
        fill="currentColor"
        d="M21 9h-6V6.4A3.51 3.51 0 0 0 11.4 3 2.46 2.46 0 0 0 9 5.5V9l-1 1H3v11h6v-9.2l2-2V5.44a.47.47 0 0 1 .5-.44A1.54 1.54 0 0 1 13 6.5V11h6v8h-8l-1 2h11zM7 19H5v-7h2z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
