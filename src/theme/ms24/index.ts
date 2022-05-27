import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
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
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  typography,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
