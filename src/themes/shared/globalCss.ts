import { defineGlobalStyles, SystemStyleObject } from '@chakra-ui/react';

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    '-webkit-font-smoothing': 'antialiased',
  } as SystemStyleObject,

  body: {
    lineHeight: 1.5,
    textStyle: 'body',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },
});
