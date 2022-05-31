import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  fontSizes,
  fontWeights,
  lineHeights,
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
  shadows,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
