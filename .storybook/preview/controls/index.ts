import { tokenControl } from './token';
import { colorControl } from './color';

export const colorControls = ['color', 'backgroundColor', 'borderColor'].reduce(
  (acc, arg) => ({ ...acc, ...colorControl(arg) }),
  {},
);

export const tokenControls = [
  { name: 'zIndex', token: 'zIndex' as const },
  { name: 'margin', token: 'spacing' as const },
  { name: 'padding', token: 'spacing' as const },
  { name: 'gap', token: 'spacing' as const },
  { name: 'width', token: 'sizes' as const },
  { name: 'height', token: 'sizes' as const },
  { name: 'boxShadow', token: 'shadows' as const },
  { name: 'borderRadius', token: 'radii' as const },
  { name: 'opacity', token: 'opacity' as const },
  { name: 'lineHeight', token: 'lineHeights' as const },
  { name: 'fontWeight', token: 'fontWeights' as const },
  { name: 'fontSize', token: 'fontSizes' as const },
  { name: 'colorPalette', token: 'colors' as const },
  { name: 'border', token: 'borders' as const },
  { name: 'aspectRatio', token: 'aspectRatios' as const },
  { name: 'animations', token: 'animations' as const },
  { name: 'durations', token: 'durations' as const },
].reduce((acc, arg) => ({ ...acc, ...tokenControl(arg) }), {});
