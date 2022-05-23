import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, spacing } from '../shared';

export const theme = {
  ...basis,
  colors,
  spacing,
  name: 'AutoScout 24',
};

export default extendTheme(theme);
