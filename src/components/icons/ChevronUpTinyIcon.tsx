import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChevronUpTinyIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ChevronUpTiny',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chevron up tiny icon</title>
      <path
        d="M6.6315 15.4424l5.3487-4.3198 5.3986 4.3215 1.2498-1.5617-6.653-5.3255-6.6001 5.3289 1.256 1.5566Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
