// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemes } from 'storybook-addon-themes';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDecorator } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addons } from '@storybook/addons';
import { ChakraProvider } from '@chakra-ui/react';

import Theme from './theme';
// eslint-disable-next-line import/no-unresolved
import { breakpoints } from '../src/themes/shared/breakpoints';
import {
  autoScout24Theme,
  autoScoutChakraTheme,
  motoScout24Theme,
  motoScoutChakraTheme,
  // eslint-disable-next-line import/no-unresolved
} from '../src/themes';

// eslint-disable-next-line import/no-unresolved
import { Fonts } from '../src/styles/Fonts';

const ThemeDecorator = (args) => {
  addons.setConfig({
    theme: Theme,
  });
  const { theme = autoScout24Theme, children } = args;
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

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
};

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
