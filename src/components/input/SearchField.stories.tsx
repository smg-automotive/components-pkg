import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { SearchField, SearchFieldProps } from './SearchField';
const meta: Meta<typeof SearchField> = {
  title: 'Components/Forms/Input/SearchField',
  component: SearchField,

  args: {
    placeholder: 'Placeholder',
    autofocusOnDesktop: false,
    name: 'searchFieldName',
    ariaControls: 'searchField',
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    setSearchQuery: action('setSearchQuery'),
  },

  argTypes: {
    placeholder: { control: { type: 'text' } },

    onBlur: {
      control: {},
    },

    onFocus: {
      control: {},
    },
  },

  decorators: (Story) => (
    <Box w="100%" maxW="550px">
      <Story />
    </Box>
  ),

  render: ({ ...props }: SearchFieldProps) => {
    return <SearchField {...props} />;
  },
};
export default meta;

type StoryType = StoryObj<typeof SearchField>;
export const Overview: StoryType = {};
