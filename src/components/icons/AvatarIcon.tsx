import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const AvatarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Avatar',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Avatar icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.125 20.2635 16.078 19.0319 17.6177L16.7071 15.2929L16.4142 15H16H8H7.58579L7.29289 15.2929L4.9681 17.6177C3.73647 16.078 3 14.125 3 12ZM6.38231 19.0319C7.92199 20.2635 9.87499 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319L15.5858 17H8.41421L6.38231 19.0319ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12ZM12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 11.9853 9.51472 14 12 14Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
