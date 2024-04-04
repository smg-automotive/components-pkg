/* eslint-disable unicorn/filename-case */
import React, { FC, PropsWithChildren } from 'react';
import {
  ensure as ensureTheme,
  ThemeProvider as StorybookThemeProvider,
} from '@storybook/theming';
import { Decorator, Preview } from '@storybook/react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

import { breakpoints } from '../src/themes/shared/breakpoints';
import {
  autoScout24Theme,
  autoScoutChakraTheme,
  motoScout24Theme,
  motoScoutChakraTheme,
} from '../src/themes';
import Fonts from '../src/fonts/Hosted';
import storybookTheme from './theme';

const themes = {
  [autoScout24Theme.name]: autoScout24Theme,
  [motoScout24Theme.name]: motoScout24Theme,
  [motoScoutChakraTheme.name]: motoScoutChakraTheme,
  [autoScoutChakraTheme.name]: autoScoutChakraTheme,
};

const ThemeDecorator: FC<
  PropsWithChildren<{ theme: ChakraProviderProps['theme'] }>
> = ({ theme, children }) => {
  return (
    <StorybookThemeProvider theme={ensureTheme(storybookTheme)}>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Fonts />
        {children}
      </ChakraProvider>
    </StorybookThemeProvider>
  );
};

const withTheme: Decorator = (Story, context) => {
  const themeName = context.globals.theme || autoScout24Theme.name;
  const theme = themes[themeName] || autoScout24Theme;

  return <ThemeDecorator theme={theme}>{Story()}</ThemeDecorator>;
};
const viewports = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  acc[key] = {
    name: key,
    styles: {
      width: `${value.em}em`,
      height: '100%',
    },
  };
  return acc;
}, {});

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for components',
      defaultValue: autoScout24Theme.name,
      toolbar: {
        icon: 'photo',
        items: Object.keys(themes).map((themeName) => ({
          title: themeName,
          value: themeName,
        })),
      },
    },
  },
  argTypes: {
    children: {
      control: { type: null },
    },
    size: { control: { type: 'select' } },
    variant: { control: { type: 'select' } },
  },
  parameters: {
    docs: {
      theme: storybookTheme,
      controls: {
        expanded: true,
        sort: 'requiredFirst',
      },
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;
