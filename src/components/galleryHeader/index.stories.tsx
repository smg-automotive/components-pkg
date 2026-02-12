import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { H1, H2 } from 'src/components/heading';
import { Box } from 'src/components/box';

import { GalleryHeader as GalleryHeaderComponent } from './index';

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
    currentSlide: 1,
    language: 'de',
    onClose: action('onClose'),
    slidesCount: 10,
    children: (
      <>
        <H1 textStyle="body-large">Title</H1>
        <H2 textStyle="body-large">Subtitle</H2>
      </>
    ),
  },

  argTypes: {
    currentSlide: {
      control: { type: 'number', min: 1 },
    },
    language: {
      control: { type: 'select' },
      options: ['de', 'en', 'fr', 'it'],
    },
    slidesCount: {
      control: { type: 'number', min: 1 },
    },
    onClose: {
      control: false,
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
