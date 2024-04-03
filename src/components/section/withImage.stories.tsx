import React from 'react';
import { Meta } from '@storybook/react';

import withoutImageMeta from './withoutImage.stories';

import SectionComponent, { Props } from './index';

const Template = ({
  nativeImageSize = '320x320',
  ...args
}: Props & { nativeImageSize?: string }) => (
  <SectionComponent
    {...args}
    image={<img src={`https://via.placeholder.com/${nativeImageSize}`} />}
  />
);

const meta: Meta<typeof Template> = {
  ...withoutImageMeta,
  title: 'Patterns/Sections/WithImage',
  component: SectionComponent,
  render: Template.bind({}),

  args: {
    ...withoutImageMeta.args,
    nativeImageSize: '320x320',
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

export const Hero = {
  args: {
    variant: 'hero',
  },
};

/**
 * Max image width is responsive, change viewport size to see the effect
 */
export const HeroResponsive = {
  args: {
    variant: 'hero',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};

export const Regular = {
  args: {
    variant: 'regular',
  },
};

/**
 * Max image width is responsive, change viewport size to see the effect
 */
export const RegularResponsive = {
  args: {
    variant: 'regular',

    maxImgW: {
      sm: 'full',
      lg: '3xl',
    },
  },
};
