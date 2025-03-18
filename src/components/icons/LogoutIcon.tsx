import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const LogoutIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Logout',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Logout icon</title>
      <g clipPath="url(#clip0_1880_5658)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 2H1.5V22H16.5V16H14.5V20H3.5V4H14.5V8.5L16.5 7.5V2ZM18.09 8.41L19.5 7L24.5 12L19.5 17L18.09 15.59L20.67 13H8.5L9.5 11H20.67L18.09 8.41Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1880_5658">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
