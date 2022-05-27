import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
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
  fontWeights,
  fontSizes,
  lineHeights,
  typography,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
