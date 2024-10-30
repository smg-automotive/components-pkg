import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DocumentIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Document',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Document icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 2H4v14l2-1V4h6v6h6v10H6v-2H4v4h16V8zm0 2.83L17.17 8H14zM8 12v2h8v-2zm0 4h5v2H8z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
