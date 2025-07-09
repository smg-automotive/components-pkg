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
      options: [
        404,
        500,
        'clientSide',
        'UNVERIFIED_EMAIL',
        'INITIAL_UNVERIFIED_EMAIL',
        'USER_BLOCKED',
        'UNKNOWN_AUTH_ERROR',
        'EMAIL_CHANGE_VERIFICATION_ERROR',
      ],
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
