import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PlusIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Plus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Plus icon</title>
      <path d="M21 11h-8V3l-2 1v7H3v2h8v8h2v-8h8v-2Z" fill="currentColor" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
