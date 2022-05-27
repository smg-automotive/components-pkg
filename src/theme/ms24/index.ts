import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, fonts, radii, sizes, space, typography } from '../shared';

export const theme = {
  ...basis,
  colors,
  space,
  radii,
  sizes,
  fonts,
  typography,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
