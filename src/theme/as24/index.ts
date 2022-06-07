import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  breakpoints,
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
import components from '../components';

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
  opacity,
  shadows,
  components,
  name: 'AutoScout 24',
};

export default extendTheme(theme);
