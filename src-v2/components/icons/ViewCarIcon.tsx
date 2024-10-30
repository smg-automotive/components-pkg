import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ViewCarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ViewCarIcon',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>View car icon</title>
      <g fill="currentColor">
        <path d="M24 23h3.98v2H24v-2Z" />
        <path d="M44 23.78A4.78 4.78 0 0 0 39.22 19h-5.68L27 9H8l-4 9 1.82.83L9.29 11H18v10h2V11h2v10h17.22A2.79 2.79 0 0 1 42 23.78V33h-4.1a5 5 0 0 0-9.8 0H24l-2 2h6.1a5 5 0 0 0 9.8 0H44V23.78ZM24 19v-8h1.89l5.26 8H24Zm9 18a3 3 0 1 1 0-5.999A3 3 0 0 1 33 37Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.552 19h6.895l.89 3.556H21V37H3V22.556h4.664L8.552 19Zm1.562 2-.389 1.556h4.55L13.885 21h-3.771ZM12 28.111a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Zm-3.667 1.667a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0ZM5 35V24.556h14V35H5Z"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
