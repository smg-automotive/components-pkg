import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const FlashIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Flash',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Flash icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.888 11.705h5.559l-6.256 6.872 1.87-5.872H7.5l6.256-6.871zm-5.638 3H3L15.54 1l1.625 1.107-2.551 7.598h7.335L9.409 23.411l-1.625-1.107 2.55-7.599z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
