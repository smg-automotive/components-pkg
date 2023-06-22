import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const EyeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Eye',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Eye icon</title>
      <path
        d="M2.16 12.39C2.29 12.7 5.47 20 12 20c6.53 0 9.71-7.3 9.84-7.61L22 12l-.16-.39C21.71 11.3 18.53 4 12 4c-6.53 0-9.71 7.3-9.84 7.61L2 12l.16.39ZM12 18c-4.45 0-7.12-4.61-7.82-6 .7-1.39 3.37-6 7.82-6s7.12 4.61 7.82 6c-.7 1.39-3.37 6-7.82 6Zm-2.222-2.674a4 4 0 1 0 4.444-6.652 4 4 0 0 0-4.444 6.652Zm1.11-4.989a2 2 0 1 1 2.223 3.325 2 2 0 0 1-2.222-3.325Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
