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
        d="M14 0.00927734H0V12.0093H14V9.79003L20 11.29V0.621826L14 2.62183V0.00927734ZM14 4.73001V7.72847L18 8.72848V3.39668L14 4.73001ZM2 10.0093V2.00928H12V10.0093H2Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
