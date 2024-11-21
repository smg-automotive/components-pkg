/* eslint-disable no-restricted-imports */
import React from 'react';
import {
  ensure as ensureTheme,
  ThemeProvider as StorybookThemeProvider,
} from '@storybook/theming';
import { Decorator } from '@storybook/react';
import {
  Box,
  ChakraProvider,
  defaultSystem,
  SystemContext,
} from '@chakra-ui/react';

import storybookTheme from '../theme';
import { autoScout24System, motoScout24System } from '../../src/themes';
import Fonts from '../../src/fonts/Hosted';

export const themeSwitcherOptions = [
  {
    value: 'autoScout24',
    title: 'AutoScout24 theme',
    chakraThemes: [
      {
        name: 'AutoScout24',
        theme: autoScout24System,
      },
    ],
  },
  {
    value: 'motoScout24',
    title: 'MotoScout24 theme',
    chakraThemes: [
      {
        name: 'MotoScout24',
        theme: motoScout24System,
      },
    ],
  },
  {
    value: 'chakra-ui',
    title: 'Default chakra-ui theme',
    chakraThemes: [
      {
        name: 'Chakra-ui',
        theme: defaultSystem,
      },
    ],
  },
  {
    value: 'autoScout24-chakra-ui',
    title: 'AutoScout24 side by side with chakra-ui',
    chakraThemes: [
      {
        name: 'AutoScout24',
        theme: autoScout24System,
      },
      {
        name: 'Chakra-ui',
        theme: defaultSystem,
      },
    ],
  },
  {
    value: 'motoScout24-chakra-ui',
    title: 'MotoScout24 side by side with chakra-ui',
    chakraThemes: [
      {
        name: 'MotoScout24',
        theme: motoScout24System,
      },
      {
        name: 'Chakra-ui',
        theme: defaultSystem,
      },
    ],
  },
];

const themesByName: Record<
  string,
  Array<{ name: string; theme: SystemContext }>
> = themeSwitcherOptions.reduce((acc, { value, chakraThemes }) => {
  acc[value] = chakraThemes;
  return acc;
}, {});

export const withThemeDecorator: Decorator = (Story, context) => {
  const storyTheme = context.globals.theme || 'autoScout24';
  const chakraThemes = themesByName[storyTheme];
  const themesToShow = chakraThemes.length;

  return (
    <StorybookThemeProvider theme={ensureTheme(storybookTheme)}>
      <Fonts />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        {chakraThemes.map(({ theme, name }, index) => (
          <div key={index} style={{ width: `${100 / themesToShow}%` }}>
            <ChakraProvider value={theme}>
              <Box display={themesToShow === 1 ? 'none' : 'block'}>{name}</Box>
              <Story />
            </ChakraProvider>
          </div>
        ))}
      </div>
    </StorybookThemeProvider>
  );
};
