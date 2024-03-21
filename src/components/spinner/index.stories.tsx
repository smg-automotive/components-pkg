import { Stack } from 'src/index';

import Spinner from './index';

const Template = (args) => {
  return <Spinner {...args} />;
};

export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,

  args: {
    size: 'sm',
  },

  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],

      control: {
        type: 'select',
      },
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',
};

export const Sizes = {
  render: () => (
    <Stack spacing="lg" direction="row">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Stack>
  ),

  name: 'Sizes',
};
