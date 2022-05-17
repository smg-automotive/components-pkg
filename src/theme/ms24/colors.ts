/* eslint-disable @typescript-eslint/naming-convention */
import { Colors } from '@chakra-ui/react';

// eslint-disable-next-line import/no-internal-modules
import sharedColors from '../shared/colors';

const colors: Colors = {
  ...sharedColors,
  brand: {
    50: '#FFF8F9',
    100: '#FFE4E5',
    200: '#FFC0C2',
    300: '#FD7978',
    400: '#FF4C52',
    500: '#EF474D',
    600: '#D64045',
    700: '#A83236',
    800: '#7D2528',
    900: '#5F1C1E',
  },
};

export default colors;
