import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MotorcycleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Motorcycle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Motorcycle icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4h4l2 8a4 4 0 1 1-1.93.52l-.32-1.27L12 16h-2l-2-6H1l1-2h13.94l-.5-2H13V4Zm-2.9 6 1.27 3.8 3.8-3.8H10.1Zm7.789 7.663a2 2 0 1 0 2.222-3.324 2 2 0 0 0-2.222 3.324ZM21 7h-2v3h2V7ZM4 5h6L9 7H4V5Zm-1.222 7.675a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652Zm1.11 4.988a2 2 0 1 0 2.223-3.325 2 2 0 0 0-2.222 3.325Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
