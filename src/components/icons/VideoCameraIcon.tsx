import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VideoCameraIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Video Camera',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Video camera icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M16 6.00928H2V18.0093H16V15.79L22 17.29V6.62183L16 8.62183V6.00928ZM16 10.73V13.7285L20 14.7285V9.39668L16 10.73ZM4 16.0093V8.00928H14V16.0093H4Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
