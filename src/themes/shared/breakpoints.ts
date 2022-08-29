import { convertRemToPx } from '../../utilities';

export const emBreakpoints = {
  base: '0em',
  xxs: '20em',
  xs: '22.5em',
  sm: '48em',
  md: '64em',
  lg: '80em',
  xl: '120em',
};

type BreakpointName = keyof typeof emBreakpoints;

export const pxBreakpoints = Object.fromEntries(
  Object.entries(emBreakpoints).map(([name, emValue]) => [
    name,
    `${convertRemToPx(emValue)}px`,
  ])
) as Record<BreakpointName, string>;

export const breakpoints = Object.fromEntries(
  Object.keys(emBreakpoints).map((name) => [
    name,
    {
      em: parseFloat(emBreakpoints[name as BreakpointName]),
      px: parseFloat(pxBreakpoints[name as BreakpointName]),
    },
  ])
) as Record<
  BreakpointName,
  {
    em: number;
    px: number;
  }
>;
