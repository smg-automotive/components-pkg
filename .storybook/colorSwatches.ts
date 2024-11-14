import { sharedConfig } from '../src/themes/shared';
import { autoScout24System, motoScout24System } from '../src/themes';

export const presetColors = [
  {
    color: autoScout24System.token('colors.brand.100'),
    title: 'AS24.brand.primary',
  },
  {
    color: motoScout24System.token('colors.brand.400'),
    title: 'MS24.brand.primary',
  },

  ...Object.entries(sharedConfig.theme.tokens.colors).map(
    ([colorName, colorToken]) =>
      'value' in colorToken
        ? { color: colorToken.value.toString(), title: colorName }
        : {
            color: colorToken['500'].value.toString(),
            title: `${colorName}.500`,
          },
  ),
];
