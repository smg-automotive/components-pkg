import { defineGlobalStyles } from '@chakra-ui/react';

export const globalCss = defineGlobalStyles({
  '*': {
    fontFeatureSettings: '"cv11"',
    margin: 0,
  },
  html: {
    lineHeight: 1.5,
    textStyle: 'body',
  },
});
