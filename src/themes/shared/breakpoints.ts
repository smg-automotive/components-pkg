export const emBreakpoints = {
  base: '0em',
  xs: '23.4375em',
  sm: '30em',
  md: '48em',
  lg: '64em',
  xl: '80em',
};

type BreakpointName = keyof typeof emBreakpoints;

export const pxBreakpoints = Object.fromEntries(
  Object.entries(emBreakpoints).map(([name, emValue]) => [
    name,
    `${parseInt(emValue, 10) * 16}px`,
  ])
) as Record<BreakpointName, string>;

export const breakpoints = Object.fromEntries(
  Object.keys(emBreakpoints).map((name) => [
    name,
    {
      em: parseInt(emBreakpoints[name as BreakpointName], 10),
      px: parseInt(pxBreakpoints[name as BreakpointName], 10),
    },
  ])
) as Record<
  BreakpointName,
  {
    em: number;
    px: number;
  }
>;
