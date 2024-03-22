import { Meta } from '@storybook/react';

import ErrorPage from './index';

const meta: Meta<typeof ErrorPage> = {
  title: 'Patterns/Content/Error',
  component: ErrorPage,
};

export const Error = {
  args: {
    statusCode: 404,
    language: 'de',
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

    brandLogo: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
