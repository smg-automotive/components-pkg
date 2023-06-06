import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DriveTypeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'DriveType',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Drive type icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 4.5 2ZM4 4.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Zm13 0a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM17 16.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM2 16.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM16 5H8v2h3v10H8v2h8v-2h-3V7h3V5Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
