import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CarConditionIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CarCondition',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Car condition icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 9h-1.5L15 4H4L1 9h2.34l1.8-3h8.62l2.51 5H19a2 2 0 0 1 2 2v3h-1.18a3 3 0 0 0-5.63 0H13l-2 2h3.19a3 3 0 0 0 5.63 0H23v-5a4 4 0 0 0-4-4m-2 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 9l1.697 4.303L12 15l-4.303 1.697L6 21l-1.697-4.303L0 15l4.303-1.697zm5-1h2v2l-2 1z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
