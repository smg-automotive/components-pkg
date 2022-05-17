/* eslint-disable @typescript-eslint/naming-convention */
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import basis from './basis';

export { default as basis } from './basis';

export const theme = {
  ...basis,
  colors,
  name: 'Base',
};

export default extendTheme(theme);
