import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MinusIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Minus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Minus icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.444 20.315a10 10 0 1 0 11.112-16.63 10 10 0 0 0-11.112 16.63M7.555 5.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304M7 13h9l1-2H7z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
