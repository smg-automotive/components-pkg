import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CategoryAOneIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CategoryAOneIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Category A one icon</title>
      <path fill="currentColor" d="M1 4h10v2H1zM13 4h10v2H13z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2h-2v4h2zM9 0v8h6V0z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M3 4v6H1V4zM23 4v16h-2V4z" />
      <path
        fill="currentColor"
        d="M16 18h7v2h-7zM8.977 14.952V13.2l3.504-1.38v8.184h-1.788v-5.736zM8.728 20.004H6.796l-.528-1.716H3.34l-.552 1.716H1l2.76-8.052h2.196zm-3.924-6.3-1.008 3.168h2.028l-.984-3.168z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
