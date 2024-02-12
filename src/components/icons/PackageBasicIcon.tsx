import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PackageBasicIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Basic',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Basic package icon</title>
      <rect
        width="14.969"
        height="14.969"
        x="1.144"
        y="11.727"
        stroke="currentColor"
        strokeWidth="2"
        rx="2"
        transform="rotate(-45 1.144 11.727)"
        fill="none"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
