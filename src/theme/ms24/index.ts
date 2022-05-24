import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, borderRadius, spacing } from '../shared';

export const theme = {
  ...basis,
  colors,
  spacing,
  borderRadius,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
