import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const EquipmentIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Equipment',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>Equipment icon</title>
      <g fill="currentColor">
        <path d="M24 5a19 19 0 1 0 0 38 19 19 0 0 0 0-38Zm0 36a17 17 0 1 1 0-34 17 17 0 0 1 0 34Z" />
        <path d="M24 10a14 14 0 1 0 8.12 25.38l.11-.05.07-.09A14 14 0 0 0 24 10Zm11.06 9.35-5.66 1.84h-.08a6 6 0 0 0-4.32-3.1.289.289 0 0 0 0-.09v-5.95a12 12 0 0 1 10.06 7.3ZM20 24a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm3-11.95V18a.289.289 0 0 0 0 .09 6 6 0 0 0-4.34 3.15h-.08l-5.66-1.84A12 12 0 0 1 23 12.05ZM12 24c.002-.923.113-1.843.33-2.74L18 23.1h.08a6.54 6.54 0 0 0-.08.9 6 6 0 0 0 1.73 4.21s-.05 0-.06.06l-3.5 4.81A12 12 0 0 1 12 24Zm5.79 10.25 3.49-4.81a.2.2 0 0 0 0-.08 5.93 5.93 0 0 0 5.36 0v.08l3.49 4.81a11.89 11.89 0 0 1-12.42 0h.08Zm14-1.17-3.49-4.81s-.05 0-.07-.06A6 6 0 0 0 30 24a6.532 6.532 0 0 0-.07-.89H30l5.66-1.84c.22.894.333 1.81.34 2.73a12 12 0 0 1-4.17 9.08h-.04Z" />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
