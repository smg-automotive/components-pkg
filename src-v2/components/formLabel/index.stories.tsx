import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import FormLabelComponent from './index';

const meta: Meta<typeof FormLabelComponent> = {
  title: 'Components/Forms/Form Label',
  component: FormLabelComponent,

  decorators: [
    (Story) => (
      <Box w="100%" maxW="250px">
        <Story />
      </Box>
    ),
  ],

  args: {
    children: 'I am label',
    size: 'lg',
  },

  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: 'select',
    },
    children: {
      control: 'text',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof FormLabelComponent> = {};
