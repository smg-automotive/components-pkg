import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MobilePhoneIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Mobile Phone',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>Missing Mobile Phone Icon</title>
      <path
        fill="currentColor"
        d="M28 0v28H4v8h20v-4l4-2v10H0V0h28ZM18 34h-8v-4h8v4ZM4 4v20h20V4H4Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
