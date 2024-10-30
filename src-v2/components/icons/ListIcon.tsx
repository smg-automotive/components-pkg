import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ListIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'List',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>List icon</title>
      <path
        fill="currentColor"
        d="M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 2h12v-6H10v6Zm2-4h8v2h-8v-2ZM5 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 2h12V9H10v6Zm2-4h8v2h-8v-2ZM5 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-4v6h12V2H10Zm10 4h-8V4h8v2Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
