/* eslint-disable unicorn/filename-case */
import React from 'react';
import {
  ensure as ensureTheme,
  ThemeProvider as StorybookThemeProvider,
} from '@storybook/theming';
import { Decorator, Preview } from '@storybook/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import {
  autoScout24System,
  breakpoints,
  motoScout24System,
} from '../src/themes';
import Fonts from '../src/fonts/Hosted';
import storybookTheme from './theme';

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

const themeOptions = [
  {
    value: 'autoScout24',
    title: 'AutoScout24 theme',
    theme: autoScout24System,
  },
  {
    value: 'motoScout24',
    title: 'MotoScout24 theme',
    theme: motoScout24System,
  },
  {
    value: 'chakra-ui',
    title: 'Default chakra-ui theme',
    theme: defaultSystem,
  },
];

const themes = themeOptions.reduce((acc, { value, theme }) => {
  acc[value] = theme;
  return acc;
}, {});

const withThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'autoScout24';
  return (
    <StorybookThemeProvider theme={ensureTheme(storybookTheme)}>
      <ChakraProvider value={themes[theme]}>
        <Fonts />
        <Story />
      </ChakraProvider>
    </StorybookThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeDecorator],
  globalTypes: {
    theme: {
      description: 'Theme for components',
      defaultValue: 'autoScout24',
      toolbar: {
        icon: 'photo',
        items: themeOptions,
      },
    },
  },
  argTypes: {
    children: {
      control: undefined,
      if: {
        arg: 'children',
        exists: true,
      },
    },
    size: {
      control: { type: 'select' },
      if: {
        arg: 'size',
        exists: true,
      },
    },
    variant: {
      control: { type: 'select' },
      if: {
        arg: 'variant',
        exists: true,
      },
    },
    fontWeight: {
      control: { type: 'select' },
      if: {
        arg: 'fontWeight',
        exists: true,
      },
    },
  },
  parameters: {
    docs: {
      theme: storybookTheme,
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;
