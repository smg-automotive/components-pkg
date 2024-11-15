import { zIndex } from './tokens/zIndex';
import { spacing } from './tokens/spacing';
import { sizes } from './tokens/sizes';
import { shadows } from './tokens/shadows';
import { radii } from './tokens/radii';
import { opacity } from './tokens/opacity';
import { lineHeights } from './tokens/lineHeights';
import { fontWeights } from './tokens/fontWeights';
import { fontSizes } from './tokens/fontSizes';
import { fonts } from './tokens/fonts';
import { colors } from './tokens/colors';
import { borders } from './tokens/borders';
import { aspectRatios } from './tokens/aspectRatios';

import { textStyles } from './textStyles';
import { slotRecipes } from './slotRecipes';
import { globalCss } from './globalCss';
import { emBreakpoints } from './breakpoints';

export const sharedConfig = {
  strictTokens: true,
  globalCss,
  theme: {
    breakpoints: emBreakpoints,
    textStyles,
    tokens: {
      zIndex,
      spacing,
      sizes,
      shadows,
      radii,
      opacity,
      lineHeights,
      fontWeights,
      fontSizes,
      fonts,
      colors,
      borders,
      aspectRatios,
    },
    slotRecipes,
  },
};

export { breakpoints } from './breakpoints';
