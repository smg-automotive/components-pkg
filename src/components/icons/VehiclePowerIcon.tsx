import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VehiclePowerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'VehiclePower',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Vehicle power icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.062 11A7.96 7.96 0 0 1 5.68 7.096l1.37 1.37L8.465 7.05l-1.37-1.37A7.96 7.96 0 0 1 11 4.062V6h2V4.062a7.96 7.96 0 0 1 3.906 1.619l-1.37 1.37-3.018 3.017A2.004 2.004 0 0 0 10 12.001a2 2 0 1 0 3.932-.518l3.018-3.018 1.37-1.37A7.96 7.96 0 0 1 19.938 11H18v2h1.938a7.972 7.972 0 0 1-2.078 4.446L16.414 16H7.586L6.14 17.447A7.972 7.972 0 0 1 4.062 13H6v-2H4.062Zm3.618 7.735A7.963 7.963 0 0 0 12 20a7.963 7.963 0 0 0 4.32-1.265L15.586 18H8.414l-.734.735ZM2 12C2 6.478 6.477 2 12 2s10 4.477 10 10c0 5.522-4.477 10-10 10S2 17.523 2 12Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
