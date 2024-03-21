import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const BatteryIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Battery',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Battery icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 3v1h4V3zm6 1V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM7 6v15h10V6zm7.861 3.25L13.3 8 8 14.625h4L9.3 18l1.561 1.25 5.3-6.625h-4z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
