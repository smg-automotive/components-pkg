import { breakpoints } from '@/src/themes/shared/breakpoints';

type BreakpointKeys = keyof typeof breakpoints;
export type ResponsiveValue<T> = Partial<Record<BreakpointKeys, T>>;
