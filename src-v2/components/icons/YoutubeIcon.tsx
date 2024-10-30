import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const YoutubeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Youtube',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Youtube icon</title>
      <g fill="none" fillRule="evenodd">
        <rect width="24" height="24" fill="red" rx="2" />
        <path
          fill="#fff"
          d="M20.3 7.8c.26 1.39.38 2.8.37 4.2 0 1.4-.11 2.81-.36 4.2-.2.75-.79 1.34-1.54 1.55a52.1 52.1 0 01-6.77.36c-2.26.02-4.53-.1-6.77-.36a2.21 2.21 0 01-1.54-1.55c-.25-1.39-.37-2.8-.36-4.2 0-1.4.11-2.81.36-4.2.2-.75.79-1.34 1.54-1.55A52.1 52.1 0 0112 5.9c2.26-.02 4.53.1 6.77.36.75.21 1.34.8 1.54 1.55zm-10.07 6.77L14.76 12l-4.53-2.57v5.14z"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
