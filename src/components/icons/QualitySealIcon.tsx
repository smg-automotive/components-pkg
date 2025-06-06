import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const QualitySealIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'QualitySeal',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Quality seal icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10a8.6 8.6 0 0 1-.9 3.9L23 18l-3 1-1 4-4-4.5a10.5 10.5 0 0 1-3 .5 10.5 10.5 0 0 1-3-.5L5 23l-1-4-3-1 2.9-4.1A8.6 8.6 0 0 1 3 10a9 9 0 1 1 18 0zM5.6 17.6l.3 1.7 1.3-1.7A10 10 0 0 1 5 15.7L4 17l1.6.6zm.58-11.489a7 7 0 1 0 11.64 7.778A7 7 0 0 0 6.18 6.111zM18.1 19.3l.3-1.7L20 17l-1-1.3a10 10 0 0 1-2.2 1.9l1.3 1.7zM10.595 6.299a2.9 2.9 0 0 1 1.405-.3A2.9 2.9 0 0 1 14.8 10H16v3l-2 1v-2h-4v2H8v-4h1.2a2.9 2.9 0 0 1 1.396-3.701zm.698 1.994a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
