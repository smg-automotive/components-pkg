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
  typography,
  fontWeights,
  fontSizes,
  lineHeights,
  name: 'AS24',
};

export default extendTheme(theme);
