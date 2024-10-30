import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const HouseIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'House',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>House icon</title>
      <path
        fill="currentColor"
        d="M22 22h-8v-7h-4v7H2V9.21L12 2l10 7.21V22Zm-6-2h4v-9.77l-8-5.77-8 5.77V20h4v-7h8v7Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
