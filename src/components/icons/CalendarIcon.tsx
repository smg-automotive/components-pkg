import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CalendarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Calendar',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Calendar icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 4h5v8H4v8h16v-6l2-1v9H2V4h5V2h2v2h6V2h2v2ZM7 6H4v4h16V6h-3v1l-2 1V6H9v1L7 8V6Zm1 10v-2H6v2h2Zm3-2h2v2h-2v-2Zm7 2v-2h-2v2h2Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
