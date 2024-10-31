/* eslint-disable unicorn/filename-case */
import React from 'react';
import {
  ensure as ensureTheme,
  ThemeProvider as StorybookThemeProvider,
} from '@storybook/theming';
import { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

import { breakpoints } from '../src/themes/shared/breakpoints';
import {
  // TODO: branded themes
  baseSystem,
} from '../src/themes';
// TODO: Fonts setup
import storybookTheme from './theme';

// TODO: themes switcher
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
  decorators: [
    (Story) => (
      <StorybookThemeProvider theme={ensureTheme(storybookTheme)}>
        <ChakraProvider value={baseSystem}>
          <Story />
        </ChakraProvider>
      </StorybookThemeProvider>
    ),
  ],
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
