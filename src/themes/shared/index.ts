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
import { cursor } from './tokens/cursor';
import { colors } from './tokens/colors';
import { borders } from './tokens/borders';
import { aspectRatios } from './tokens/aspectRatios';
import { animations } from './tokens/animations';

import { textStyles } from './textStyles';
import { slotRecipes } from './slotRecipes';
import { recipes } from './recipes';
import { globalCss } from './globalCss';
import { emBreakpoints } from './breakpoints';

export const getSharedConfig = () => ({
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
      cursor,
      colors,
      borders,
      aspectRatios,
      animations,
    },
    recipes,
    slotRecipes,
  },
});

export { breakpoints } from './breakpoints';
