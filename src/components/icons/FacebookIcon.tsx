import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const FacebookIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Facebook',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Facebook icon</title>
      <rect width="24" height="24" fill="#4267B2" rx="2" />
      <path
        fill="#FFF"
        d="M16.7 14.67h3.13l.46-3.64h-3.6V8.77c0-1.05.3-1.76 1.8-1.76h1.92V3.76c-.92-.1-1.85-.14-2.78-.13a4.35 4.35 0 00-4.66 4.78v2.67H9.84v3.59h3.13V24h3.72v-9.33z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
