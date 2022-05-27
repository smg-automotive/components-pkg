import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis, radii, sizes, space } from '../shared';

export const theme = {
  ...basis,
  colors,
  space,
  radii,
  sizes,
  name: 'MotoScout 24',
};

export default extendTheme(theme);
