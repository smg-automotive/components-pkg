import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DocumentCheckIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'DocumentCheck',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Document check icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2h10l6 6v14H4zm2 18h12V10h-6V4H6zm8-15.17V8h3.17zm-3.01 10.75 3.6-3.58L16 13.41l-5.01 5-2.99-3L9.41 14z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
