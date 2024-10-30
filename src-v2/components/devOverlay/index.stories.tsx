import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Brand } from 'src/types/brand';

import ThemeProvider from '../themeProvider';
import { FullHeight } from '../index';

import DevOverlayComponent, { type DevOverlayProps } from './index';

const Template = (args: DevOverlayProps) => {
  const [{ activeTheme, displayTranslationKeys }, updateArgs] = useArgs();
  const toggleTheme = () => {
    return updateArgs({
      activeTheme:
        activeTheme === Brand.AutoScout24
          ? Brand.MotoScout24
          : Brand.AutoScout24,
    });
  };
  const toggleTranslation = () => {
    return updateArgs({
      displayTranslationKeys: !displayTranslationKeys,
    });
  };

  return (
    <DevOverlayComponent
      {...args}
      toggleTheme={toggleTheme}
      toggleTranslation={toggleTranslation}
    />
  );
};

const meta: Meta<typeof DevOverlayComponent> = {
  title: 'Theme/DevOverlay',
  component: DevOverlayComponent,

  decorators: [
    (Story) => {
      const [{ activeTheme }] = useArgs();

      return (
        <ThemeProvider theme={activeTheme}>
          <FullHeight>
            <Story />
          </FullHeight>
        </ThemeProvider>
      );
    },
  ],

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    activeTheme: {
      options: [Brand.AutoScout24, Brand.MotoScout24],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof DevOverlayComponent> = {
  render: Template.bind({}),

  args: {
    variables: [
      {
        name: 'version',
        value: 'v1-storybook-demo',
      },
      {
        name: 'env',
        value: 'storybook',
      },
    ],

    activeTheme: Brand.AutoScout24,

    displayTranslationKeys: false,
  },
};
