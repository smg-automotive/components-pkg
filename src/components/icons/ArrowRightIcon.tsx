import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const ArrowRightIcon = createIcon({
  displayName: 'ArrowRight',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Arrow right icon</title>
      <path
        d="m13 3.019-1.41 1.41 6.58 6.59H3l-1 2h16.17l-6.58 6.59 1.41 1.41 9-9-9-9Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
