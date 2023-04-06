import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const PlusIcon = createIcon({
  displayName: 'Plus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Plus icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.086 3h5.828l.293.293L19.914 6H23v14H1V6h7.086l2.707-2.707.293-.293Zm.828 2L9.207 7.707 8.914 8H3v10h18V8h-1.914l-.293-.293L16.086 5h-4.172ZM14 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
