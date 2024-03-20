import Rating from './index.tsx';

const Template = (args) => {
  return <Rating {...args} />;
};

export default {
  title: 'Components/Data display/Rating',
  component: Rating,

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const Large = {
  render: Template.bind({}),
  name: 'Large',

  args: {
    rating: 4.5,
    size: 'large',
  },
};

export const Small = {
  render: Template.bind({}),
  name: 'Small',

  args: {
    rating: 4.5,
    size: 'small',
  },
};
