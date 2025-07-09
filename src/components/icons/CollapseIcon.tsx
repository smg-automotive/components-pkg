import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CollapseIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Collapse',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Collapse icon</title>
      <path
        fill="currentColor"
        d="M11.857 12.857v4a.55.55 0 0 1-.17.402.55.55 0 0 1-.401.17.55.55 0 0 1-.402-.17l-1.286-1.286-2.964 2.965a.28.28 0 0 1-.41 0L5.204 17.92a.28.28 0 0 1 0-.41l2.965-2.965-1.286-1.286a.55.55 0 0 1-.17-.402.55.55 0 0 1 .17-.401.55.55 0 0 1 .402-.17h4a.55.55 0 0 1 .402.17.55.55 0 0 1 .17.401m6.652-6.205a.28.28 0 0 1 0 .41l-2.964 2.965 1.285 1.286a.55.55 0 0 1 .17.402.55.55 0 0 1-.17.401.55.55 0 0 1-.401.17h-4a.55.55 0 0 1-.402-.17.55.55 0 0 1-.17-.401v-4a.55.55 0 0 1 .17-.402.55.55 0 0 1 .402-.17.55.55 0 0 1 .401.17l1.286 1.285 2.964-2.964a.28.28 0 0 1 .411 0z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
