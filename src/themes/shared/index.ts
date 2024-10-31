import { defineConfig } from '@chakra-ui/react';

import { zIndex } from './zIndex';
import { textStyles } from './typography';
import { spacing } from './spacing';
import { sizes } from './sizes';
import { shadows } from './shadows';
import { opacity } from './opacity';
import { lineHeights } from './lineHeights';
import { fontWeights } from './fontWeights';
import { fontSizes } from './fontSizes';
import { fonts } from './fonts';
import { colors } from './colors';
import { emBreakpoints } from './breakpoints';
import { borders } from './borders';
import { radii } from './borderRadius';

export const sharedConfig = defineConfig({
  strictTokens: true,
  cssVarsPrefix: 'chakra',
  theme: {
    breakpoints: emBreakpoints,
    textStyles,
    tokens: {
      zIndex,
      opacity,
      colors,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      sizes,
      shadows,
      spacing,
      radii,
      borders,
    },
  },
});
export { breakpoints } from './breakpoints';
