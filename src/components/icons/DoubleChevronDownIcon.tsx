import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DoubleChevronDownIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'DoubleChevronDownIcon',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Double Chevron Down Icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.632 5.8274l5.3487 4.3198 5.3987-4.3215 1.2498 1.5617-6.6531 5.3255L5.376 7.3841l1.256-1.5567ZM6.632 11.2894l5.3487 4.3198 5.3987-4.3215 1.2498 1.5617-6.6531 5.3255-6.6001-5.3288 1.256-1.5567Z"
          fill="currentColor"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
