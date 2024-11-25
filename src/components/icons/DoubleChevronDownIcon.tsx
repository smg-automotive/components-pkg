import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DoubleChevronDownIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'DoubleChevronDown',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Double chevron down icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 7.415L6.415 6L12 11.585L17.589 6L19 7.415L12 14.415L5 7.415ZM5 13.415L6.415 12L12 17.585L17.589 12L19 13.415L12 20.415L5 13.415Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
