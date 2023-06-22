import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DeleteIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Delete',
  viewBox: '0 0 16 16',
  path: (
    <>
      <title>Delete icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 1.3335C4.31301 1.3335 1.33301 4.3135 1.33301 8.00016C1.33301 11.6868 4.31301 14.6668 7.99967 14.6668C11.6863 14.6668 14.6663 11.6868 14.6663 8.00016C14.6663 4.3135 11.6863 1.3335 7.99967 1.3335ZM7.99967 13.3335C5.05967 13.3335 2.66634 10.9402 2.66634 8.00016C2.66634 5.06016 5.05967 2.66683 7.99967 2.66683C10.9397 2.66683 13.333 5.06016 13.333 8.00016C13.333 10.9402 10.9397 13.3335 7.99967 13.3335ZM7.99967 7.06016L10.393 4.66683L11.333 5.60683L8.93967 8.00016L11.333 10.3935L10.393 11.3335L7.99967 8.94016L5.60634 11.3335L4.66634 10.3935L7.05967 8.00016L4.66634 5.60683L5.60634 4.66683L7.99967 7.06016Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
