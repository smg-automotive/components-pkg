import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ForwardIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ForwardIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Forward icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9.54L10 14L14.44 22L22 2L2 9.54ZM14.12 17.31L12 13.42L14.41 11L13 9.59L10.58 12L6.69 9.88L18.58 5.42L14.12 17.31Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
