import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes';
import { ChakraProvider } from '@chakra-ui/react';
import { addons } from '@storybook/addons';

import {
  motoScout24Theme,
  motoScoutChakraTheme,
  autoScout24Theme,
  autoScoutChakraTheme,
} from '../src/themes';

import { breakpoints } from '../src/themes/shared/breakpoints';
import { Fonts } from '../src/styles/Fonts';
import Theme from './theme';

const ThemeDecorator = (args) => {
  addons.setConfig({
    theme: Theme,
  });
  const { theme = autoScout24Theme, children } = args;
  return(
    <ChakraProvider theme={theme} resetCSS={true} >
      <Fonts />
      {children}
    </ChakraProvider>
  )
}

addDecorator(withThemes);
const themes = {
  default: 'AutoScout 24',
  Decorator: ThemeDecorator,
  list: [
    motoScout24Theme,
    motoScoutChakraTheme,
    autoScout24Theme,
    autoScoutChakraTheme,
  ],
}

const customViewports = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      name: key,
      styles: {
        width: value,
        height: '100%',
      },
    };
    return acc;
  },
  {}
);

export const parameters = {
  themes,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
