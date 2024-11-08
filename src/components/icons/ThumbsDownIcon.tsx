import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ThumbsDownIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Thumbs down',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Thumbs down icon</title>
      <path
        fill="currentColor"
        d="M3 15h6v2.6a3.51 3.51 0 0 0 3.6 3.4 2.46 2.46 0 0 0 2.4-2.5V15l1-1h5V3h-6v9.2l-2 2v4.36a.47.47 0 0 1-.5.44 1.54 1.54 0 0 1-1.5-1.5V13H5V5h8l1-2H3zM17 5h2v7h-2z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
