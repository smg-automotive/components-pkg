import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CheckmarkIcon = createIcon({
  displayName: 'Checkmark',
  viewBox: '0 0 12 10',
  path: (
    <path
      d="M4.00018 7.77999L0.94685 4.72665L0.000183105 5.66665L4.00018 9.66665L12.0002 1.66665L11.0602 0.726654L4.00018 7.77999Z"
      fill="currentColor"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
