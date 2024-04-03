import { Meta } from '@storybook/react';

import SectionComponent from './index';

const meta: Meta<typeof SectionComponent> = {
  title: 'Patterns/Sections/WithoutImage',
  component: SectionComponent,

  args: {
    title:
      'Thank you for sending a message! We have sent a copy to your inbox.',
    text: 'Auto-Center Grenchen AG has received your message. A common response time is around 1 to 4 days.',
    maxImgW: undefined,
  },

  argTypes: {
    variant: {
      options: ['hero', 'regular'],
      control: 'select',
    },

    maxImgW: {
      table: { disable: true },
    },
  },
};
export default meta;

export const Hero = {
  args: {
    variant: 'hero',
  },
};

export const Regular = {
  args: {
    variant: 'regular',
  },
};
