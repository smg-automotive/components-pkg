import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const MessageCtaIcon = createIcon({
  displayName: 'MessageCta',
  viewBox: '0 0 24 24',
  path: (
    <path
      d="m0 0v16h20v-16zm10 10-8-8h16zm8-5.17v6.32l-3.16-3.15zm-12.83 3.17-3.17 3.17v-6.34zm-3.17 6 4.59-4.59 3.41 3.42 3.43-3.43 4.57 4.6z"
      fill="currentColor"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
