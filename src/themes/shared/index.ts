import { zIndices } from './zIndices';
import { textStyles } from './typography';
import { space } from './space';
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
import { basis } from './basis';

export const shared = {
  ...basis,
  colors,
  breakpoints: emBreakpoints,
  textStyles,
  space,
  sizes,
  shadows,
  opacity,
  borders,
  radii,
  lineHeights,
  fontWeights,
  fontSizes,
  fonts,
  zIndices,
};
export { type Sizes } from './sizes';
export { type Space } from './space';
export { type FontWeights } from './fontWeights';
export { breakpoints } from './breakpoints';
