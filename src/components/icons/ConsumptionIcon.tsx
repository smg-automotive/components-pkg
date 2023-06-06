import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ConsumptionIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Consumption',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Consumption icon</title>
      <path fill="currentColor" d="M10 15v-3l-2 1v3l2-1Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.63 2.52C12.93 2.76 20 8.59 20 14a8 8 0 0 1-16 0c0-5.41 7.07-11.24 7.37-11.48L12 2l.63.52ZM10.268 6.3C8.254 8.43 6 11.452 6 14a6 6 0 1 0 12 0c0-2.55-2.254-5.57-4.268-7.702A32.297 32.297 0 0 0 12 4.61c-.434.392-1.054.976-1.732 1.689Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
