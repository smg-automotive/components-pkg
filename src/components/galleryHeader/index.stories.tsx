import React from 'react';

import { H1, H2 } from 'src/components/heading';
import Box from 'src/components/box';

import GalleryHeaderComponent from './index';

const Template = (args) => (
  <Box backgroundColor="black">
    <GalleryHeaderComponent
      currentSlide={2}
      slidesCount={3}
      onClose={() => null}
      {...args}
    >
      <>
        <H1 textStyle="body-large">Title</H1>
        <H2 textStyle="body-large">Subtitle</H2>
      </>
    </GalleryHeaderComponent>
  </Box>
);

export default {
  title: 'Components/Navigation/GalleryHeader',
  component: GalleryHeaderComponent,
};

export const GalleryHeader = {
  render: Template.bind({}),
  name: 'GalleryHeader',

  args: {
    title: 'Gallery Header',
    subtitle: 'Subtitle',
    language: 'de',
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },
  },
};
