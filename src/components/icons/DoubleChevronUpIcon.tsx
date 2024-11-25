import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DoubleChevronUpIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'DoubleChevronUp',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Double chevron up icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 17L6.415 18.415L12 12.83L17.589 18.415L19 17L12 10L5 17ZM5 11L6.415 12.415L12 6.83L17.589 12.415L19 11L12 4L5 11Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
