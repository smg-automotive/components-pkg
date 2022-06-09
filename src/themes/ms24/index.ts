import colors from './colors';
import {
  basis,
  borders,
  breakpoints,
  fontSizes,
  fontWeights,
  lineHeights,
  opacity,
  radii,
  shadows,
  sizes,
  space,
  typography,
} from '../shared';
import { components } from '../components';

export const theme = {
  ...basis,
  breakpoints,
  borders,
  colors,
  space,
  radii,
  sizes,
  fontWeights,
  fontSizes,
  lineHeights,
  typography,
  opacity,
  shadows,
  components,
  name: 'MotoScout 24',
};

export default theme;
