/* eslint-disable unicorn/filename-case */
import { Preview } from '@storybook/react';

import { breakpoints } from 'src/themes';

import storybookTheme from './theme';
import {
  themeSwitcherOptions,
  withThemeDecorator,
} from './preview/ThemeDecorator';
import { colorControls } from './preview/controls';

const viewports = Object.entries(breakpoints).reduce(
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
  {} as Record<
    string,
    { name: string; styles: { width: string; height: string } }
  >,
);

const preview: Preview = {
  decorators: [withThemeDecorator],
  globalTypes: {
    theme: {
      description: 'Theme for components',
      defaultValue: 'autoScout24',
      toolbar: {
        icon: 'photo',
        items: themeSwitcherOptions,
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
    ...colorControls,
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
