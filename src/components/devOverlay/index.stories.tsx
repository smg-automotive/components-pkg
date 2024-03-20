import React from 'react';
import { useArgs } from '@storybook/client-api';

import { Brand } from 'src/types/brand';

import ThemeProvider from '../themeProvider';
import { FullHeight } from '../index';

import DevOverlayComponent from './index';

const Template = ({ ...args }) => {
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

export default {
  title: 'Theme/DevOverlay',
  component: DevOverlayComponent,

  parameters: {
    layout: 'fullscreen',
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

  argTypes: {
    activeTheme: {
      options: [Brand.AutoScout24, Brand.MotoScout24],
      control: 'select',
    },
  },
};
