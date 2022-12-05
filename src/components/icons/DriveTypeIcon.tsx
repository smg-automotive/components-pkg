import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const DriveTypeIcon = createIcon({
  displayName: 'DriveType',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 5h10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 22h-2c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 19h10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 22H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1ZM20 8h-2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1ZM6 8H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.3 15 1.5-3h-3.6l1.5-3"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
