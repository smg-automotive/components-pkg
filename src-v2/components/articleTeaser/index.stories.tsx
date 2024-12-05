import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import ArticleTeaser from './index';

const meta: Meta<typeof ArticleTeaser> = {
  title: 'Patterns/Content/Article Teaser',
  component: ArticleTeaser,
  decorators: [
    (Story) => (
      <Box maxW={{ '2xs': '100%', md: '600px' }}>
        <Story />
      </Box>
    ),
  ],

  args: {
    title: 'Lorem Picsum',
    text: 'A very cool service that provides placeholder images. You can learn more about the options and usage here.',
    url: 'https://picsum.photos/',
    imageUrl: 'https://picsum.photos/320/320',
    maxImgW: '4xl',
  },

  argTypes: {
    maxImgW: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select',
    },
  },
};

type StoryType = StoryObj<typeof ArticleTeaser>;
export const Overview: StoryType = {};

/**
 * Bigger image on mobile viewport.
 */
export const Responsive: StoryType = {
  args: {
    maxImgW: {
      '2xs': 'full',
      sm: '3xl',
    },
  },
};

export default meta;
