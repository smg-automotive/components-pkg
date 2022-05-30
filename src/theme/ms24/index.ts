import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  containers,
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
  containers,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
