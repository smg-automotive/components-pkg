import { withThemes } from 'storybook-addon-themes';
import React from 'react';
import {
  ensure as ensureTheme,
  ThemeProvider as StorybookThemeProvider,
} from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { addons } from '@storybook/addons';
import { ChakraProvider } from '@chakra-ui/react';

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
import Fonts from '../src/fonts/Hosted';
import Theme from './theme';

const ThemeDecorator = (args) => {
  addons.setConfig({
    theme: Theme,
  });
  const { theme = autoScout24Theme, children } = args;
  return (
    <StorybookThemeProvider theme={ensureTheme()}>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Fonts />
        {children}
      </ChakraProvider>
    </StorybookThemeProvider>
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
        width: `${value.em}em`,
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
