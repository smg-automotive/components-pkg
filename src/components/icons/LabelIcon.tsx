import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const LabelIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'LabelIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Label icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0834 7.01583V4.58333L12.25 4V7.5L6.41669 13.3333L1.16669 8.08333L7.00002 2.25H12.25V3.41667H7.48419L2.81752 8.08333L6.41669 11.6825L11.0834 7.01583ZM9.08428 4.58098L7.58745 6.0784L8.42045 6.9114L9.91786 5.41457L9.08428 4.58098Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
