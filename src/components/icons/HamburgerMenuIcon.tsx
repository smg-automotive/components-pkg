import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const HamburgerMenuIcon = createIcon({
  displayName: 'HamburgerMenu',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Hamburger menu icon</title>
      <path d="M3 11H21V13H3V11Z" fill="currentColor" />
      <path d="M3 17H21V19H3V17Z" fill="currentColor" />
      <path d="M3 5H21V7H3V5Z" fill="currentColor" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
