import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ZoomInIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ZoomInIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Zoom in icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2a9.001 9.001 0 1 1-5.59 16l-4 4L2 20.62l4-4A9 9 0 0 1 13 2m2.679 2.533a7 7 0 1 0-5.358 12.934A7 7 0 0 0 15.68 4.533"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12 7v9h2V6z" />
      <path fill="currentColor" d="M18 12H8v-2h10z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
