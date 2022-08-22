import { convertRemToPx } from '../../utilities';

export const emBreakpoints = {
  base: '0em',
  xs: '20em',
  sm: '30em',
  md: '48em',
  lg: '64em',
  xl: '80em',
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
