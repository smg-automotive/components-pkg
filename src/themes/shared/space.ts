export const space = {
  xxs: '0.125rem',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '3rem',
  '5xl': '4rem',
  '6xl': '6rem',
  '7xl': '8rem',
  'auth0-spacing': '2.5rem',
};

export type Space = Exclude<keyof typeof space, undefined>;
