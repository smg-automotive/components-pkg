import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DoubleLineIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'DoubleLine',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Double line icon</title>
      <path fill="none" d="M.0012-.0001h24v23.9998h-24z" />
      <path fill="currentColor" d="M6.102 15.5h12v-2h-12v2Zm0-5h12v-2h-12v2Z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
