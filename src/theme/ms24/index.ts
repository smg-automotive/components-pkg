import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  fonts,
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
import { components } from '../components';

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
  opacity,
  shadows,
  fonts,
  components,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
