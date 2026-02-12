import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { tokenControl } from '.storybook/preview/controls/token';

import { ArticleTeaser } from './index';

const meta: Meta<typeof ArticleTeaser> = {
  title: 'Patterns/Content/Article Teaser',
  component: ArticleTeaser,
  decorators: [
    (Story) => (
      <Box maxWidth={{ '2xs': 'full', md: '7xl' }}>
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
    ...tokenControl({ name: 'maxImgW', token: 'sizes' }),
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
