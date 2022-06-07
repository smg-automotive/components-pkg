/* eslint-disable @typescript-eslint/naming-convention */
import { Colors } from '@chakra-ui/react';

import { colors as sharedColors } from '../shared';

const brandPrimary = '#FF4C52';
const brand600 = '#D64045';

const colors: Colors = {
  ...sharedColors,
  brand: {
    50: '#FFF8F9',
    100: '#FFE4E5',
    200: '#FFC0C2',
    300: '#FD7978',
    400: brandPrimary,
    500: '#EF474D',
    600: brand600,
    700: '#A83236',
    800: '#7D2528',
    900: '#5F1C1E',
    primary: brandPrimary,
    btnShadow: brand600,
  },
};

export default colors;
