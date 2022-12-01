import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const FacebookIcon = createIcon({
  displayName: 'Facebook',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fill="#4267B2"
        d="M20.333 2H3.667C2.747 2 2 2.746 2 3.667v16.666C2 21.253 2.746 22 3.667 22h16.666c.92 0 1.667-.746 1.667-1.667V3.667C22 2.747 21.254 2 20.333 2Z"
      />
      <path
        fill="#fff"
        d="M13.192 14.218h2.369l.348-3.036h-2.725V9.298c0-.876.228-1.468 1.363-1.468H16V5.119c-.696-.083-1.4-.117-2.104-.108a3.004 3.004 0 0 0-1.414.223 3.28 3.28 0 0 0-1.195.861c-.337.38-.593.838-.752 1.339a3.974 3.974 0 0 0-.166 1.563v2.227H8v2.994h2.369V22h2.816v-7.782h.007Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
