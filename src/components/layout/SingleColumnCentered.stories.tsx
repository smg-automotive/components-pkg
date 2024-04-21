import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Center } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';

import { FullHeight } from '../index';
import SingleColumnCenteredLayout from './SingleColumnCentered';

const meta: Meta<typeof SingleColumnCenteredLayout> = {
  title: 'Layout/Pages/Single Column Centered',
  component: SingleColumnCenteredLayout,
  decorators: [
    (Story) => (
      <FullHeight>
        <Story />
      </FullHeight>
    ),
  ],

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    maxContentWidth: 'lg',
  },

  argTypes: {
    maxContentWidth: {
      options: Object.keys(sizes.container),

      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof SingleColumnCenteredLayout>;
export const ContentOnly: StoryType = {
  name: 'Content only',
  args: {
    children: (
      <Box background="blue.300" height="600px">
        I am the content
      </Box>
    ),
  },
};

export const ContentAndStepper: StoryType = {
  args: {
    children: [
      <Box background="blue.200" key="stepper">
        <Center>1-2-3-4-5</Center>
      </Box>,
      <Box background="blue.300" height="600px" key="content">
        I am the content
      </Box>,
    ],
  },

  name: 'Content and Stepper',
};
