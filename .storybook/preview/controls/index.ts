import { colorControl } from './color';

export const colorControls = ['color', 'backgroundColor', 'borderColor'].reduce(
  (acc, arg) => ({ ...acc, ...colorControl(arg) }),
  {},
);
