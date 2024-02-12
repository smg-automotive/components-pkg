import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PackagePlusIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Plus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Plus package icon</title>
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 8V16"
        stroke="#333333"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 12H16"
        stroke="#333333"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
