import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const NewBadgeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'New Badge',
  viewBox: '0 0 34 19',
  path: (
    <>
      <title>New Badge</title>
      <rect width="34" height="19" fill="#F5F200" />
      <path
        d="M21.4335 14L19.2495 6.02002H20.7255L22.2015 12.32H22.2255L23.8335 7.22002H25.1655L26.7975 12.32H26.8215L28.2855 6.02002H29.7135L27.5415 14H26.0415L24.4935 9.10402H24.4695L22.9095 14H21.4335Z"
        fill="#333333"
      />
      <path
        d="M14.424 12.86H18.444V14H13.056V6.02002H18.348V7.17202H14.424V9.33202H18.108V10.448H14.424V12.86Z"
        fill="#333333"
      />
      <path
        d="M4.888 14V6.02002H6.208L10 11.936H10.024V6.02002H11.284V14H9.964L6.172 8.08402H6.148V14H4.888Z"
        fill="#333333"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
