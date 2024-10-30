import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CreditCardIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CreditCard',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Credit card icon</title>
      <path
        fillRule="evenodd"
        d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zm4-2a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H6zM4 16v-6h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm7-2H6v-2h6l-1 2zm6 0h-3v-2h4l-1 2z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
