import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CategoryAIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CategoryAIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Category A icon</title>
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
        d="M12 18h11v2H12zM8.728 20.002H6.796l-.528-1.716H3.34l-.552 1.716H1l2.76-8.052h2.196zm-3.924-6.3L3.796 16.87h2.028l-.984-3.168z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
