import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Center } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';

import { FullHeight } from '../index';
import SingleColumnCenteredLayout, {
  SingleColumnCenteredLayoutProps,
} from './SingleColumnCentered';

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

export const ContentOnly = {
  name: 'Content only',
  render: (args: SingleColumnCenteredLayoutProps) => (
    <SingleColumnCenteredLayout {...args}>
      <Box background="blue.300" height="600px">
        I am the content
      </Box>
    </SingleColumnCenteredLayout>
  ),
};

export const ContentAndStepper = {
  render: (args: SingleColumnCenteredLayoutProps) => (
    <SingleColumnCenteredLayout {...args}>
      <Box background="blue.200">
        <Center>1-2-3-4-5</Center>
      </Box>
      <Box background="blue.300" height="600px">
        I am the content
      </Box>
    </SingleColumnCenteredLayout>
  ),
  name: 'Content and Stepper',
};
