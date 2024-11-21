/* eslint-disable unicorn/filename-case */
import { Preview } from '@storybook/react';

import { breakpoints } from '../src/themes';
import storybookTheme from './theme';
import {
  themeSwitcherOptions,
  withThemeDecorator,
} from './preview/ThemeDecorator';
import { presetColors } from './colorSwatches';

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

const colorControl = (arg: string) => ({
  [arg]: {
    control: {
      type: 'color' as const,
      presetColors,
    },
    if: {
      arg,
      exists: true,
    },
  },
});

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
    ...['color', 'backgroundColor', 'borderColor'].reduce(
      (acc, arg) => ({ ...acc, ...colorControl(arg) }),
      {},
    ),
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
