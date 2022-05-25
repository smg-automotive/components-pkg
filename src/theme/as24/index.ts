import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, borderRadius, fonts, spacing, typography } from '../shared';

export const theme = {
  ...basis,
  colors,
  spacing,
  borderRadius,
  fonts,
  typography,
  name: 'AutoScout 24',
};

export default extendTheme(theme);
