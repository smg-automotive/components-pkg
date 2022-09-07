import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ErrorIcon = createIcon({
  displayName: 'Error',
  path: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 22L12 2L23 22H1ZM4.37 20H19.62L12 6.16L4.37 20ZM13 14L11 15V10H13V14ZM11 19L13 18V16H11V19Z"
        fill="currentColor"
      />
    </svg>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
