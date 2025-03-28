import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const BulbIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Bulb',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Bulb icon</title>
      <path
        fill="currentColor"
        d="M20 10a8 8 0 1 0-12 6.918V22h8v-5.082A8 8 0 0 0 20 10m-6 10h-4v-2.263c1.31.352 2.69.352 4 0zm-1-4.09V11h2V9H9v2h2v4.91a6 6 0 1 1 2 0"
      />
      <path fill="currentColor" d="m11 13 2-1v-2h-2v3Z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
