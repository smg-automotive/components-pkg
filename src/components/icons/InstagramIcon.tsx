import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const InstagramIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Instagram',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Instagram icon</title>
      <g fill="none" fillRule="evenodd">
        <rect width="24" height="24" fill="#DA2D73" rx="2" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M12 8.92A3.07 3.07 0 008.92 12 3.08 3.08 0 1012 8.92zm0-1.72a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm4.15-2.83h-8.3a3.48 3.48 0 00-3.48 3.48v8.3a3.48 3.48 0 003.48 3.48h8.3a3.48 3.48 0 003.48-3.48v-8.3a3.48 3.48 0 00-3.48-3.48zm0-1.7a5.19 5.19 0 015.18 5.18v8.3a5.19 5.19 0 01-5.18 5.18h-8.3a5.19 5.19 0 01-5.18-5.18v-8.3a5.19 5.19 0 015.18-5.18h8.3zm1.04 5.48a1.33 1.33 0 110-2.67 1.33 1.33 0 010 2.67z"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
