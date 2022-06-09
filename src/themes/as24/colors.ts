/* eslint-disable @typescript-eslint/naming-convention */
import { Colors } from '@chakra-ui/react';

import { colors as sharedColors } from '../shared';

const brandPrimary = '#F5F200';
const brand300 = '#C1B900';

const colors: Colors = {
  ...sharedColors,
  brand: {
    50: '#FEFCD0',
    100: brandPrimary,
    200: '#DCD500',
    300: brand300,
    400: '#9E9600',
    500: '#908800',
    600: '#827900',
    700: '#665E00',
    800: '#4C4500',
    900: '#3A3400',
    primary: brandPrimary,
    btnShadow: brand300,
  },
};

export default colors;
