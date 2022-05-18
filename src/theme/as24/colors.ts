/* eslint-disable @typescript-eslint/naming-convention */
import { Colors } from '@chakra-ui/react';

import { colors as sharedColors } from '../shared';

const colors: Colors = {
  ...sharedColors,
  brand: {
    50: '#FEFCD0',
    100: '#F5F200',
    200: '#DCD500',
    300: '#C1B900',
    400: '#9E9600',
    500: '#908800',
    600: '#827900',
    700: '#665E00',
    800: '#4C4500',
    900: '#3A3400',
  },
};

export default colors;
