import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const InformationBubbleIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'Information',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Information icon</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.0195 15.8414L18.5508 16.6957L18.9346 17.5913L19.9669 20H12C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.3962 19.6441 14.7032 19.0195 15.8414ZM23 22L22.1429 20L20.7729 16.8035C21.5551 15.3779 22 13.7409 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22H20.8241H23ZM13 11L11 12V18H13V11ZM13 9V6L11 7V9H13Z"
          clipRule="evenodd"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
