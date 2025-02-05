import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getSharedConfig } from 'src/themes/shared';

import { FullHeight } from '../fullHeight';

import { Center } from '../center';

import { Box } from '../box';

import { SingleColumnCenteredLayout } from './SingleColumnCentered';

const sharedConfig = getSharedConfig();
const sizes = sharedConfig.theme.tokens.sizes;

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
    children: 'box',
  },
  argTypes: {
    children: {
      mapping: {
        box: (
          <Box background="blue.300" height="6xl">
            I am the content
          </Box>
        ),
      },
      table: {
        disable: true,
      },
    },
  },
};

export const ContentAndStepper: StoryType = {
  name: 'Content and Stepper',
  args: {
    children: ['boxStepper', 'boxContent'],
  },
  argTypes: {
    children: {
      mapping: {
        boxStepper: (
          <Box background="blue.200" key="stepper">
            <Center>1-2-3-4-5</Center>
          </Box>
        ),
        boxContent: (
          <Box background="blue.300" height="6xl" key="content">
            I am the content
          </Box>
        ),
      },
      table: {
        disable: true,
      },
    },
  },
};
