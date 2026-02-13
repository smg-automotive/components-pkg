import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const PhoneIcon = createIcon({
  displayName: 'Phone',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Phone icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 2V16H7V20H17V18L19 17V22H5V2H19ZM14 19H10V17H14V19ZM7 4V14H17V4H7Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
