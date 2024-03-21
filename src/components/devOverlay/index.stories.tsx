import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Brand } from 'src/types/brand';

import ThemeProvider from '../themeProvider';
import { FullHeight } from '../index';

import DevOverlayComponent, { type DevOverlayProps } from './index';

const Template = (args: DevOverlayProps) => {
  const [{ activeTheme }, updateArgs] = useArgs();
  const toggleTheme = () => {
    if (activeTheme === Brand.AutoScout24) {
      return updateArgs({ activeTheme: Brand.MotoScout24 });
    }
    return updateArgs({ activeTheme: Brand.AutoScout24 });
  };
  return (
    <ThemeProvider theme={activeTheme}>
      <FullHeight>
        <DevOverlayComponent {...args} toggleTheme={toggleTheme} />
      </FullHeight>
    </ThemeProvider>
  );
};

const meta: Meta<typeof DevOverlayComponent> = {
  title: 'Theme/DevOverlay',
  component: DevOverlayComponent,

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

export const DevOverlay = {
  render: Template.bind({}),
  name: 'DevOverlay',

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
  },
};

export default meta;
