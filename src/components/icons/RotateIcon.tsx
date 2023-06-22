import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const RotateIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Rotate',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Rotate icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.599 8.657c-1.025-1.6-2.805-2.66-4.827-2.66-3.174 0-5.747 2.607-5.747 5.822s2.573 5.822 5.747 5.822c1.58 0 3.009-.645 4.049-1.69l1.426 1.456a7.7 7.7 0 0 1-5.475 2.285C7.48 19.692 4 16.167 4 11.819c0-4.348 3.48-7.873 7.772-7.873 2.534 0 4.784 1.229 6.203 3.13V3.692H20v7.016h-6.626v-2.05h3.225Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
