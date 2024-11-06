import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const CopyIcon = createIcon({
  displayName: 'Copy',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Copy icon</title>
      <path
        d="M21 3H8V8H3V21H16V16H21V3ZM15 20H4V9H15V20ZM20 15H16V8H9V4H20V15Z"
        stroke="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
