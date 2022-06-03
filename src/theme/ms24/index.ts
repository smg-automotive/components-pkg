import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  components,
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
  colors,
  space,
  radii,
  sizes,
  fontWeights,
  fontSizes,
  lineHeights,
  typography,
  containers,
  opacity,
  shadows,
  components,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
