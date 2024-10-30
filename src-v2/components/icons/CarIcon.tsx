import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Car',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Car icon</title>
      <path
        fill="currentColor"
        d="M19 11h-1.5L15 6H4l-3 5v9h3.18a3 3 0 0 0 5.64 0h4.37a3 3 0 0 0 5.63 0H23v-5a4 4 0 0 0-4-4ZM7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-2h-1.18a3 3 0 0 0-5.63 0H9.82a3 3 0 0 0-5.63 0H3v-5h3l1-2H3.33l1.81-3h8.62l2.51 5H19a2 2 0 0 1 2 2v3Z"
      />
      <path fill="currentColor" d="m11 13 2-1v-2h-2v3Z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
