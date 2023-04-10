import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const MagnifierIcon = createIcon({
  displayName: 'LocationPin',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Magnifier icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10C19 12.7614 16.7614 15 14 15C11.2386 15 9 12.7614 9 10C9 7.23858 11.2386 5 14 5C16.7614 5 19 7.23858 19 10ZM21 10C21 13.866 17.866 17 14 17C12.4306 17 10.9818 16.4835 9.81438 15.6113L4.412 21.0031L3 19.5871L8.39794 14.1979C7.52011 13.0284 7 11.5749 7 10C7 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
