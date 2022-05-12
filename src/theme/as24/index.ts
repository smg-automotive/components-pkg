import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import { basis } from '../shared';

export const theme = {
  ...basis,
  colors,
  name: 'AutoScout 24',
};

export default extendTheme(theme);
