import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const GasStationIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'GasStation',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Gas station icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8v5a2 2 0 0 0 1 1.72V2h14v8h-2V4H7v16h6v2H2v-2h3v-3.14A4 4 0 0 1 2 13V7l2 1ZM2 5l2 1V2H2v3Zm13 3H9V6h6v2Zm5.78 4.625-1.56-1.25L13.92 18h4l-2.7 3.375 1.56 1.25L22.08 16h-4l2.7-3.375Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
