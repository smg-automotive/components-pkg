import {
  createSystem,
  defaultBaseConfig,
  mergeConfigs,
} from '@chakra-ui/react';

import { sharedConfig } from './shared';

export const autoScout24Config = mergeConfigs(
  {
    cssVarsPrefix: 'as24',
    theme: {
      semanticTokens: {
        colors: {
          brand: {
            fg: { value: '{colors.black}' },
            primary: { value: '{colors.brand.100}' },
            btnShadow: { value: '{colors.brand.300}' },
          },
        },
      },
      tokens: {
        colors: {
          brand: {
            50: { value: '#FEFCD0' },
            100: { value: '#F5F200' },
            200: { value: '#DCD500' },
            300: { value: '#C1B900' },
            400: { value: '#9E9600' },
            500: { value: '#908800' },
            600: { value: '#827900' },
            700: { value: '#665E00' },
            800: { value: '#4C4500' },
            900: { value: '#3A3400' },
          },
        },
      },
    },
  },
  sharedConfig,
);

export default createSystem(defaultBaseConfig, autoScout24Config, {
  preflight: true,
});
