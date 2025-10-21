import { breakpoints } from 'src/themes';

type BreakpointKeys = keyof typeof breakpoints;
export type ResponsiveValue<T> = Partial<Record<BreakpointKeys, T>>;
