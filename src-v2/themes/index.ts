import { extendTheme } from '@chakra-ui/react';

import { theme as ms24Theme } from './motoscout24';
import { theme as as24Theme } from './autoscout24';

export const autoScout24Theme = as24Theme;
export const motoScout24Theme = ms24Theme;

export const motoScoutChakraTheme = extendTheme({
  ...motoScout24Theme,
  name: 'MotoScout 24 with Chakra',
});
export const autoScoutChakraTheme = extendTheme({
  ...autoScout24Theme,
  name: 'AutoScout 24 with Chakra',
});
export {
  type Sizes,
  type Space,
  type FontWeights,
  shared,
  breakpoints,
} from './shared';
