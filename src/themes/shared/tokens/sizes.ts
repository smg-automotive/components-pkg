import { defineTokens } from '@chakra-ui/react';

export const sizes = defineTokens.sizes({
  auto: { value: 'auto' },
  xs: { value: '1rem' },
  sm: { value: '1.5rem' },
  md: { value: '2.25rem' },
  lg: { value: '3rem' },
  xl: { value: '4rem' },
  '2xl': { value: '6rem' },
  '3xl': { value: '8rem' },
  '4xl': { value: '10rem' },
  '5xl': { value: '15rem' },
  '6xl': { value: '20rem' },
  '7xl': { value: '30rem' },
  '8xl': { value: '45rem' },
  full: { value: '100%' },
  container: {
    sm: { value: '640px' },
    md: { value: '768px' },
    lg: { value: '1024px' },
    xl: { value: '1280px' },
    '2xl': { value: '1604px' },
  },
  'auth0-width': { value: '25rem' },
  'auth0-height': { value: '33.75rem' },
  'screen-height': {value: '100vh'},
});
