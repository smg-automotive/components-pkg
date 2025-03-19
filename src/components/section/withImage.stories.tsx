import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import withoutImageMeta from './withoutImage.stories';

import { Section, SectionProps } from './index';

const Template = ({ ...args }: SectionProps) => {
  return (
    <Section
      {...args}
      image={<img src="https://picsum.photos/320/320" alt="" />}
    />
  );
};

const meta: Meta<typeof Section> = {
  ...withoutImageMeta,
  title: 'Patterns/Sections/WithImage',
  component: Template,

  args: {
    ...withoutImageMeta.args,
    maxImgW: '2xl',
  },
  argTypes: {
    ...withoutImageMeta.argTypes,
    maxImgW: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select',
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof Section>;

export const Hero: StoryType = {
  args: {
    variant: 'hero',
  },
};

/**
 * Max image width is responsive, change viewport size to see the effect
 */
export const HeroResponsive: StoryType = {
  args: {
    variant: 'hero',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};

export const Regular: StoryType = {
  args: {
    variant: 'regular',
  },
};

/**
 * Max image width is responsive, change viewport size to see the effect
 */
export const RegularResponsive: StoryType = {
  args: {
    variant: 'regular',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};
