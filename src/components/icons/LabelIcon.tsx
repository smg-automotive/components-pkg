import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const LabelIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'LabelIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Label icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11.17V7L21 6V12L11 22L2 13L12 3H21V5H12.83L4.83 13L11 19.17L19 11.17ZM15.573 6.99597L13.007 9.56297L14.435 10.991L17.002 8.42497L15.573 6.99597Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
