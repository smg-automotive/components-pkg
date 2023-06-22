import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ErrorIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Error',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Error icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.444 20.315a10 10 0 1 0 11.112-16.63 10 10 0 0 0-11.112 16.63ZM7.555 5.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304ZM11 13l2-1V6h-2v7Zm0 5 2-1v-2h-2v3Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
