import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TrailerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Trailer',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Trailer icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 7h14.535l4 6H23v2H9.828a3 3 0 0 1-5.656 0H1V7Zm14 6h2.131l-2.666-4H3v4h1.172a3 3 0 0 1 5.656 0H15Zm-7.293 1.708a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
