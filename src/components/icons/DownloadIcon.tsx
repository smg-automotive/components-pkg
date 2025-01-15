import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DownloadIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Download',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Download icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.58 8.59L18 10.01L12 16.01L6 10.01L7.42 8.6L11 12.18V3L13 2V12.18L16.58 8.59ZM19 19V14L21 12V21H3V12H5V19H19Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
