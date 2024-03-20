import Section from './index.tsx';

const Template = ({ nativeImageSize, ...args }) => (
  <Section
    {...args}
    image={<img src={`https://via.placeholder.com/${nativeImageSize}`} />}
  />
);

export default {
  title: 'Patterns/Sections/WithImage',
  component: Section,

  args: {
    title:
      'Thank you for sending a message! We have sent a copy to your inbox.',
    text: 'Auto-Center Grenchen AG has received your message. A common response time is around 1 to 4 days.',
    nativeImageSize: '320x320',
    maxImgW: '2xl',
  },

  argTypes: {
    variant: {
      options: ['hero', 'regular'],
      control: 'select',
    },

    maxImgW: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
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

export const HeroResponsive = {
  render: Template.bind({}),
  name: 'Hero Responsive',

  args: {
    variant: 'hero',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};

export const Regular = {
  render: Template.bind({}),
  name: 'Regular',

  args: {
    variant: 'regular',
  },
};

export const RegularResponsive = {
  render: Template.bind({}),
  name: 'Regular Responsive',

  args: {
    variant: 'regular',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};
