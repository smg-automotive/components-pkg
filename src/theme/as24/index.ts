import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import {
  basis,
  borderRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
} from '../shared';

export const theme = {
  ...basis,
  colors,
  spacing,
  borderRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  name: 'AutoScout 24',
};

export default extendTheme(theme);
