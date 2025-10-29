import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ParagraphIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Paragraph',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Paragraph Icon</title>
      <path
        fill="currentColor"
        d="M10 19H3V13H10V19ZM19 19H11V17H19V19ZM5 17H8V15H5V17ZM22 15H11V13H22V15ZM10 10H3V4H10V10ZM19 10H11V8H19V10ZM5 8H8V6H5V8ZM22 6H11V4H22V6Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
