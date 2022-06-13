import React from 'react';
import { addDecorator } from '@storybook/react';
import {
  ThemeProvider as StorybookThemeProvider,
  ensure as ensureTheme,
} from '@storybook/theming';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import { withThemes } from '@react-theming/storybook-addon';

import { motoScout24Theme, motoScoutChakraTheme, autoScout24Theme, autoScoutChakraTheme } from '../src/themes'
import { breakpoints } from '../src/themes/shared/breakpoints'
import { Fonts } from '../src/styles/fonts';

const providerFn = ({ theme = autoScout24Theme, children }) => {
  return (
    <StorybookThemeProvider theme={ensureTheme()}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Fonts />
        {children}
      </ThemeProvider>
    </StorybookThemeProvider>
  );
};

addDecorator(
  withThemes(null, [autoScout24Theme, motoScout24Theme, autoScoutChakraTheme, motoScoutChakraTheme], { providerFn })
);

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
