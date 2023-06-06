import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TwitterIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Twitter',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Twitter icon</title>
      <g fill="none" fillRule="evenodd">
        <rect width="24" height="24" fill="#1DA1F2" rx="2" />
        <path
          fill="#FFF"
          d="M9.21 18.1a8.7 8.7 0 008.76-9.15c.6-.44 1.13-.98 1.54-1.6-.56.25-1.15.41-1.76.48a3.04 3.04 0 001.33-1.7c-.6.36-1.26.62-1.95.75a3.08 3.08 0 00-5.25 2.8 8.72 8.72 0 01-6.33-3.21c-.82 1.4-.4 3.2.94 4.1a3.01 3.01 0 01-1.33-.38 3.08 3.08 0 002.47 3.02c-.44.1-.9.1-1.34 0a3.1 3.1 0 002.88 2.14 6.23 6.23 0 01-3.82 1.33c-.24.02-.48.02-.72 0a8.67 8.67 0 004.7 1.33"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
