import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const LockIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Lock',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Lock icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.063 8.765c.914 0 1.687.773 1.687 1.688v6.75c0 .949-.773 1.687-1.687 1.687H1.688C.738 18.89 0 18.152 0 17.203v-6.75c0-.915.738-1.688 1.688-1.688h.843V6.234C2.531 3.316 4.921.89 7.875.89c2.918 0 5.344 2.426 5.344 5.344v2.531zm-3.657 0V6.234c0-1.371-1.16-2.531-2.531-2.531a2.543 2.543 0 0 0-2.531 2.53v2.532z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
