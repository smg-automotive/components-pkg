import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChatBubbleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Chat Bubble',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chat Bubble</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19V15H0V0H20V15H10L4 19ZM6 13V15.26L9.38 13H18V2H2V13H6ZM15 6H4V4H16L15 6ZM4 8H13V10H4V8Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
