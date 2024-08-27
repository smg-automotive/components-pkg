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
        d="M6 22.0098V18.0098H2V3.00977H22V18.0098H12L6 22.0098ZM8 16.0098V18.2698L11.38 16.0098H20V5.00977H4V16.0098H8ZM17 9.00977H6V7.00977H18L17 9.00977ZM6 11.0098H15V13.0098H6V11.0098Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
