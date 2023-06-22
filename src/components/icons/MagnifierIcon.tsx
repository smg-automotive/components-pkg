import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MagnifierIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'LocationPin',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Magnifier icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm2 0a7 7 0 0 1-11.186 5.611l-5.402 5.392L3 19.587l5.398-5.39A7 7 0 1 1 21 10Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
