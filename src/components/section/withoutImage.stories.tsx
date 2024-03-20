import Section from './index.tsx';

const Template = (args) => <Section {...args} />;

export default {
  title: 'Patterns/Sections/WithoutImage',
  component: Section,

  args: {
    title:
      'Thank you for sending a message! We have sent a copy to your inbox.',
    text: 'Auto-Center Grenchen AG has received your message. A common response time is around 1 to 4 days.',
  },

  argTypes: {
    variant: {
      options: ['hero', 'regular'],
      control: 'select',
    },
  },
};

export const Hero = {
  render: Template.bind({}),
  name: 'Hero',

  args: {
    variant: 'hero',
  },
};

export const Regular = {
  render: Template.bind({}),
  name: 'Regular',

  args: {
    variant: 'regular',
  },
};
