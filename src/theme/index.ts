import { theme as chakraDefaultTheme, extendTheme } from '@chakra-ui/react';

import motoScout24Theme from './ms24';
import autoScout24Theme from './as24';

const chakraTheme = extendTheme({ name: 'Chakra' }, chakraDefaultTheme);
const motoScoutChakraTheme = extendTheme(
  Object.assign({}, motoScout24Theme, { name: 'MotoScout 24 with Chakra' })
);
const autoScoutChakraTheme = extendTheme(
  Object.assign({}, autoScout24Theme, { name: 'AutoScout 24 with Chakra' })
);

export default {
  motoScout24Theme,
  autoScout24Theme,
  motoScoutChakraTheme,
  autoScoutChakraTheme,
  chakraTheme,
};
