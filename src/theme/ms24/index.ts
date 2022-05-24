import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, borderRadius, size, spacing } from '../shared';

export const theme = {
  ...basis,
  colors,
  spacing,
  borderRadius,
  size,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
