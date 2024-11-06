import {
  createSystem,
  defaultBaseConfig,
  mergeConfigs,
} from '@chakra-ui/react';

import { sharedConfig } from './shared';

const motoScout24Config = mergeConfigs(
  {
    cssVarsPrefix: 'ms24',
    theme: {
      semanticTokens: {
        colors: {
          brand: {
            primary: { value: '{colors.brand.400}' },
            btnShadow: { value: '{colors.brand.600}' },
          },
        },
      },
      tokens: {
        colors: {
          brand: {
            50: { value: '#FFF8F9' },
            100: { value: '#FFE4E5' },
            200: { value: '#FFC0C2' },
            300: { value: '#FD7978' },
            400: { value: '#FF4C52' },
            500: { value: '#EF474D' },
            600: { value: '#D64045' },
            700: { value: '#A83236' },
            800: { value: '#7D2528' },
            900: { value: '#5F1C1E' },
          },
        },
      },
    },
  },
  sharedConfig,
);

export default createSystem(defaultBaseConfig, motoScout24Config);
