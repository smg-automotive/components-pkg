import { Meta, StoryObj } from '@storybook/react';

// import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Section } from './index';

const meta: Meta<typeof Section> = {
  title: 'Patterns/Sections/WithoutImage',
  component: Section,

  args: {
    title:
      'Thank you for sending a message! We have sent a copy to your inbox.',
    text: 'Auto-Center Grenchen AG has received your message. A common response time is around 1 to 4 days.',
    variant: 'hero',
  },
  argTypes: {
    // ...getRecipeControls('section'),
    variant: {
      options: ['hero', 'regular'],
      control: 'select',
    },
    maxImgW: {
      table: { disable: true },
    },
    image: {
      table: { disable: true },
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof Section>;

export const Overview: StoryType = {};

export const Hero: StoryType = {
  args: {
    variant: 'hero',
  },
};

export const Regular: StoryType = {
  args: {
    variant: 'regular',
  },
};
