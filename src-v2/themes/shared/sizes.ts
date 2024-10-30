export const sizes = {
  xs: '1rem',
  sm: '1.5rem',
  md: '2.25rem',
  lg: '3rem',
  xl: '4rem',
  '2xl': '6rem',
  '3xl': '8rem',
  '4xl': '10rem',
  '5xl': '15rem',
  '6xl': '20rem',
  '7xl': '30rem',
  '8xl': '45rem',
  full: '100%',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1604px',
  },
  'auth0-width': '25rem',
  'auth0-height': '33.75rem',
};

export type Sizes = Exclude<keyof typeof sizes, 'container'>;
