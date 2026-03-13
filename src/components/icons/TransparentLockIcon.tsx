import React from 'react';

import { createIcon } from '@chakra-ui/react';

export const TransparentLockIcon = createIcon({
  displayName: 'TransparentLock',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Transparent lock icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C13.3 2 14.6 2.5 15.5 3.5C16.5 4.4 17 5.7 17 7V10H20V22H4V10H15V7C15 6.3 14.7998 5.59961 14.2998 5.09961C13.8998 4.59977 13.3997 4.19959 12.7998 4.09961C12.1999 3.99965 11.5999 4.00022 11 4.2002C10.4 4.4002 9.8996 4.79982 9.59961 5.2998C9.54963 5.34982 9.50017 5.42523 9.4502 5.5127L8.7002 7.09961L7.09961 5.90039C7.39961 5.00039 7.8 4.1 8.5 3.5C9.4 2.5 10.7 2 12 2ZM6 12V20H18V12H6ZM13 14V18L11 17V14H13Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
