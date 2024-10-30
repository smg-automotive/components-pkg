import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PrintIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Print',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Print icon</title>
      <path
        d="M22 8H8V4H16V6L18 5V2H6V8H2V19H6V22H18V19H22V8ZM16 20H8V16H16V20ZM20 17H18V14H6V17H4V10H20V17Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
