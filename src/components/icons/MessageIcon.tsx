import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MessageIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Message',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Message icon</title>
      <path
        d="m2.5 4.01953v15.99997h20v-15.99997zm10 9.99997-8-7.99997h16zm8-5.16997v6.31997l-3.16-3.15zm-12.83 3.16997-3.17 3.17v-6.33997zm-3.17 6 4.59-4.59 3.41 3.42 3.43-3.43 4.57 4.6z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
