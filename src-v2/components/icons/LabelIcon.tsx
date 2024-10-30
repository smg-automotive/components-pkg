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
        d="M16.0834 9.01583V6.58333L17.25 6V9.5L11.4167 15.3333L6.16669 10.0833L12 4.25H17.25V5.41667H12.4842L7.81752 10.0833L11.4167 13.6825L16.0834 9.01583ZM14.0843 6.58098L12.5874 8.0784L13.4204 8.9114L14.9179 7.41457L14.0843 6.58098Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
