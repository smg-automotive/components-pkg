import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TrashIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Trash',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Trash icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 6v2H7v12h10V10l2-1v13H5V8H3V6h5V2h8v4h5ZM10 4v2h4V4h-4Zm1 6v7l-2 1v-8h2Zm4 0v7l-2 1v-8h2Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
