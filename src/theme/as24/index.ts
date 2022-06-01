import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  breakpoints,
  containers,
  fontSizes,
  fontWeights,
  lineHeights,
  opacity,
  radii,
  shadows,
  sizes,
  space,
  typography,
} from '../shared';

export const theme = {
  ...basis,
  breakpoints,
  colors,
  space,
  radii,
  sizes,
  typography,
  fontWeights,
  fontSizes,
  lineHeights,
  containers,
  opacity,
  shadows,
  name: 'AS24',
};

export default extendTheme(theme);
