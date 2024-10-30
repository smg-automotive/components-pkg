import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const RocketIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Rocket',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Rocket icon</title>
      <path
        fill="currentColor"
        d="M13.145 7.575a1.407 1.407 0 1 0 1.563-2.339 1.407 1.407 0 0 0-1.563 2.34Z"
      />
      <path
        strokeWidth="2"
        d="M18.758 1.671a.607.607 0 0 0-.429-.428C17.197 1 16.311 1 15.429 1c-3.63 0-5.806 1.94-7.431 4.5H4.334c-.575 0-1.25.417-1.508.931L1.088 9.905a.998.998 0 0 0-.088.376.844.844 0 0 0 .844.844h3.65l-.79.79c-.4.4-.457 1.134 0 1.59l1.789 1.79c.392.394 1.13.463 1.592 0l.79-.79v3.651a.844.844 0 0 0 .844.844c.13-.005.258-.035.376-.088l3.471-1.737c.514-.256.932-.931.932-1.507v-3.671C17.05 10.369 19 8.186 19 4.576c.004-.887.004-1.773-.24-2.905Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
    stroke: 'currentColor',
  },
});
