import { defineGlobalStyles, SystemStyleObject } from '@chakra-ui/react';

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
  } as SystemStyleObject,

  body: {
    lineHeight: 'md',
    textStyle: 'body',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },
});
