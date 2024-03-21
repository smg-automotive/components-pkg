import ErrorPage from './index';

const Template = (args) => <ErrorPage {...args} />;

export default {
  title: 'Patterns/Content/Error',
  component: ErrorPage,
};

export const Error = {
  render: Template.bind({}),
  name: 'Error',

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
