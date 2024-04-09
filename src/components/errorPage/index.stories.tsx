import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ErrorPage from './index';

const meta: Meta<typeof ErrorPage> = {
  title: 'Patterns/Content/Error',
  component: ErrorPage,

  args: {
    statusCode: 404,
    language: 'de',
    onButtonClick: action('onButtonClick'),
  },

  argTypes: {
    statusCode: {
      options: [404, 500, 'clientSide'],
      control: 'select',
    },

    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

export const Overview: StoryObj<typeof ErrorPage> = {};
