import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const NotAvailableIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Not Available',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Not Available</title>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="M18 11.3334H6V12.6667H18V11.3334Z" fill="white" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
