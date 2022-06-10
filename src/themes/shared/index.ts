import { typography } from './typography';
import { space } from './space';
import { sizes } from './sizes';
import { shadows } from './shadows';
import { opacity } from './opacity';
import { lineHeights } from './lineHeights';
import { fontWeights } from './fontWeights';
import { fontSizes } from './fontSizes';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { borders } from './borders';
import { radii } from './borderRadius';
import { basis } from './basis';

export const shared = {
  ...basis,
  colors,
  breakpoints,
  typography,
  space,
  sizes,
  shadows,
  opacity,
  borders,
  radii,
  lineHeights,
  fontWeights,
  fontSizes,
};
