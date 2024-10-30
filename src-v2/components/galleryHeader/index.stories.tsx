import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { H1, H2 } from 'src/components/heading';
import Box from 'src/components/box';

import GalleryHeaderComponent from './index';

const meta: Meta<typeof GalleryHeaderComponent> = {
  title: 'Components/Navigation/GalleryHeader',
  component: GalleryHeaderComponent,

  decorators: [
    (Story) => (
      <Box backgroundColor="black">
        <Story />
      </Box>
    ),
  ],

  args: {
    language: 'de',
    currentSlide: 1,
    slidesCount: 10,
    onClose: action('onClose'),
    children: (
      <>
        <H1 textStyle="body-large">Title</H1>
        <H2 textStyle="body-large">Subtitle</H2>
      </>
    ),
  },

  argTypes: {
    language: {
      control: { type: 'select' },
      options: ['de', 'en', 'fr', 'it'],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof GalleryHeaderComponent> = {};
