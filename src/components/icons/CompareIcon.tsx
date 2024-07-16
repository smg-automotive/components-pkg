import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CompareIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Compare',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Compare icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 4h9v8H2zm2 2h5v4H4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M11 14H2v2h9zM2 18h9v2H2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4h9v8h-9zm2 2h5v4h-5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 14h9v2h-9zM22 18h-9v2h9z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
