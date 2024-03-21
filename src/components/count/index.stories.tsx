import CountComponent from './index';

export default {
  title: 'Components/Data display/Count',
  component: CountComponent,

  argTypes: {
    variant: {
      type: 'select',
      options: ['primary', 'inverted'],
    },
  },
};

export const Count = {
  args: {
    variant: 'primary',
    count: '50',
  },
};
