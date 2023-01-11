import { extendTheme } from '@chakra-ui/react';

import { theme as ms24Theme } from './ms24';
import { theme as as24Theme } from './as24';
import { theme as is24Theme } from './is24';

export const autoScout24Theme = as24Theme;
export const motoScout24Theme = ms24Theme;
export const immoScout24Theme = is24Theme;

export const motoScoutChakraTheme = extendTheme(
  Object.assign({}, motoScout24Theme, { name: 'MotoScout 24 with Chakra' })
);
export const autoScoutChakraTheme = extendTheme(
  Object.assign({}, autoScout24Theme, { name: 'AutoScout 24 with Chakra' })
);
export { Sizes, shared, breakpoints } from './shared';
