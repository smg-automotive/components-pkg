import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ZoomOutIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ZoomOut',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Zoom out icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2a9 9 0 0 1 8.563 11.968A9 9 0 0 1 7.41 18l-4 4L2 20.62l4-4A9.001 9.001 0 0 1 13 2m2.679 2.533a7 7 0 1 0-5.358 12.935 7 7 0 0 0 5.358-12.935"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M18 12H8v-2h10z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
