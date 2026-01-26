import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const LinkIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Link',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Link icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.328 4.914a4 4 0 0 0-5.656 0L9.414 8.172a4 4 0 0 0 0 5.656l1.086 1.086 1.414-1.414-1.086-1.086a2 2 0 0 1 0-2.828l3.258-3.258a2 2 0 0 1 2.828 0l.758.758a2 2 0 0 1 0 2.828L16.586 11 18 12.414l1.086-1.085a4 4 0 0 0 0-5.657zM5.672 19.086a4 4 0 0 0 5.657 0l3.257-3.257a4 4 0 0 0 0-5.657L13.5 9.086 12.086 10.5l1.086 1.086a2 2 0 0 1 0 2.828l-3.258 3.258a2 2 0 0 1-2.828 0l-.758-.758a2 2 0 0 1 0-2.828L7.414 13 6 11.586l-1.086 1.086a4 4 0 0 0 0 5.656z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
