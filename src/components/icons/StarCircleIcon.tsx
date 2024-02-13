import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const StarCircleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'StarCircle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Star circle icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1c6.071 0 11 4.93 11 11s-4.929 11-11 11S1 18.072 1 12 5.929 1 12 1m0 2c4.967 0 9 4.032 9 9 0 4.967-4.033 9-9 9s-9-4.033-9-9c0-4.968 4.033-9 9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.825 6.912 12 5.71 9.613 9.192l-4.05 1.193 2.575 3.348-.117 4.22 3.98-1.414 3.978 1.415-.116-4.221 2.575-3.348-4.05-1.193zM12 9.247l1.14 1.662 1.933.57-1.23 1.598.056 2.015L12 14.416l-1.9.676.056-2.015-1.23-1.598 1.935-.57z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
