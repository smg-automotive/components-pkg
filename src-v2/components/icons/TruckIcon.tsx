import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TruckIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Truck',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title id="truckTitle">Truck icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.079 2.928.997.076h.009l.011.001.032.003.093.012c.074.011.173.029.288.057.222.055.545.16.858.37A3.666 3.666 0 0 1 13.967 6h2.678c.564 0 1.114.195 1.549.558.435.364.727.874.811 1.44l.002.012.434 3.204a302.699 302.699 0 0 1 2.362.686l.478.14.719.211V20h-2.172a2.999 2.999 0 0 1-5.656 0H9.828a3 3 0 0 1-5.656 0H1v-7h11V6.486a1.667 1.667 0 0 0-.742-1.375.767.767 0 0 0-.23-.092 1.067 1.067 0 0 0-.098-.02l-.015-.002-.988-.075.152-1.994ZM14 13v5h1.172a2.999 2.999 0 0 1 5.656 0H21v-4.25l-.842-.246a169.43 169.43 0 0 0-1.76-.505 1.017 1.017 0 0 1-.065.002H14Zm3.394-2H14V8h2.645c.103 0 .198.036.267.093a.321.321 0 0 1 .114.194L17.394 11ZM12 15H3v3h1.172a3 3 0 0 1 5.656 0H12v-3Zm-4.293 3.293a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM18 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
