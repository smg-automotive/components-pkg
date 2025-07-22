import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ExpandIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Expand',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Expand icon</title>
      <path
        fill="currentColor"
        d="M11.652 13.508a.28.28 0 0 1 0 .41l-2.964 2.965 1.285 1.286a.55.55 0 0 1 .17.402.55.55 0 0 1-.17.401.55.55 0 0 1-.402.17h-4a.55.55 0 0 1-.401-.17.55.55 0 0 1-.17-.401v-4a.55.55 0 0 1 .17-.402.55.55 0 0 1 .401-.17.55.55 0 0 1 .402.17l1.286 1.285 2.964-2.964a.28.28 0 0 1 .41 0zM18.714 6v4a.55.55 0 0 1-.17.402.55.55 0 0 1-.401.17.55.55 0 0 1-.402-.17l-1.286-1.286-2.964 2.964a.282.282 0 0 1-.41 0l-1.018-1.017a.28.28 0 0 1-.09-.206q0-.116.09-.205l2.964-2.964L13.74 6.4a.55.55 0 0 1-.17-.402.55.55 0 0 1 .17-.402.55.55 0 0 1 .402-.17h4a.55.55 0 0 1 .402.17.55.55 0 0 1 .17.402"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
