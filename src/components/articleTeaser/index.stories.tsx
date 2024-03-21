import React from 'react';
import { Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import ArticleTeaser, { type Props } from './index';

const Template = ({
  nativeImageSize,
  ...args
}: Props & { nativeImageSize: string }) => (
  <Box maxW={{ '2xs': '100%', md: '600px' }}>
    <ArticleTeaser
      {...args}
      imageUrl={`https://via.placeholder.com/${nativeImageSize}`}
    />
  </Box>
);

const meta: Meta<typeof Template> = {
  title: 'Patterns/Content/Article Teaser',
  component: ArticleTeaser,

  args: {
    nativeImageSize: '320x320',
    title: 'Placeholder.com',
    text: 'A very cool service that provides placeholder images. You can learn more about the options and usage here.',
    url: 'https://placeholder.com',
    maxImgW: '4xl',
  },

  argTypes: {
    maxImgW: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select',
    },
  },
};

export const Overview = {
  render: Template.bind({}),
};

export const Responsive = {
  render: Template.bind({}),

  args: {
    maxImgW: {
      '2xs': 'full',
      sm: '3xl',
    },
  },
};

export default meta;
