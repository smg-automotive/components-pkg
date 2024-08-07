import { breakpoints } from 'src/themes';

export type ShowUnderMoreBreakpoint = `(max-width: ${number}px)`;

const minWidthMore = breakpoints.sm.px;
const maxWidthMore = breakpoints.lg.px;

export const sell: ShowUnderMoreBreakpoint = `(max-width: ${breakpoints.sm.px}px)`;
export const estimate: ShowUnderMoreBreakpoint = `(max-width: ${breakpoints.md.px}px)`;
export const assure: ShowUnderMoreBreakpoint = `(max-width: ${maxWidthMore}px)`;
export const electromobility: ShowUnderMoreBreakpoint = `(max-width: ${maxWidthMore}px)`;
export const magazine: ShowUnderMoreBreakpoint = `(max-width: ${maxWidthMore}px)`;
export const showMoreDrawer = `(min-width: ${minWidthMore}px) and (max-width: ${maxWidthMore}px)`;
export const showMoreDrawerInsideSearchDrawer: ShowUnderMoreBreakpoint = `(max-width: ${minWidthMore - 1}px)`;
