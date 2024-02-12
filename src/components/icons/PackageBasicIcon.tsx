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
        x="1.14352"
        y="11.7266"
        width="14.9686"
        height="14.9686"
        rx="2"
        transform="rotate(-45 1.14352 11.7266)"
        stroke="#333333"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
