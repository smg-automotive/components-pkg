import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, borderRadius } from '../shared';

export const theme = {
  ...basis,
  colors,
  borderRadius,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
