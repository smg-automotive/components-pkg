import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VideoIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Video',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Video icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12L9 17V7L18 12ZM11 13.601V10.399L13.8817 12L11 13.601Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
