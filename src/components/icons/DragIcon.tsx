import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const DragIcon = createIcon({
  displayName: 'Drag',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Drag icon</title>
      <path
        fill="currentColor"
        d="M5 3h6v5H5zm0 7h6v5H5zm0 7h6v5H5zm8-14h6v5h-6zm0 7h6v5h-6zm0 7h6v5h-6z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
