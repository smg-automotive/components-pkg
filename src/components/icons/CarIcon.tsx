import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CarIcon = createIcon({
  displayName: 'Car',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.77 19.003H8.38"
      />
      <circle
        cx="17.35"
        cy="18.253"
        r="1.751"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="6.628"
        cy="18.253"
        r="1.751"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.928 19.003h1.237c.74 0 1.367-.541 1.479-1.272l.335-2.186c.163-1.022-.482-2-1.486-2.252a17.605 17.605 0 0 0-4.583-.47 14.156 14.156 0 0 0-2.956-1.99 7.857 7.857 0 0 0-7.045 0l-2.252 1.13a6.617 6.617 0 0 1-.985.393.984.984 0 0 0-.678.943v4.204a1.499 1.499 0 0 0 1.497 1.5h1.558"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
