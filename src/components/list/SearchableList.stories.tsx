import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '../box';
import { Props, SearchableList } from './SearchableList';

const meta: Meta<typeof SearchableList> = {
  title: 'Components/Data display/List/SearchableList',
  component: SearchableList,

  decorators: [
    (Story) => (
      <Box maxW="400px" height="6xl" overflow="hidden">
        <Box maxW="400px" height="full" overflow="auto" padding="lg">
          <Story />
        </Box>
      </Box>
    ),
  ],

  args: {
    listItems: [
      {
        value: '1',
        label: 'Option with facet',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        facet: '13',
      },
      {
        value: '2',
        label: '1231231',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '3',
        label: 'Checked Option',
        onClick: () => {},
        showChevron: false,
        isSelected: true,
      },
      {
        value: '4',
        label: 'Ocean Breeze',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '5',
        label: 'Mountain Peak',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '6',
        label: 'Desert Rose',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '7',
        label: 'Forest Glade',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '8',
        label: 'River Stream',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '9',
        label: 'Sunny Meadow',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
      {
        value: '10',
        label: 'Thunderstorm',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
      },
    ],
    searchFieldOptions: {},
  },

  render: ({ listItems, searchFieldOptions }: Props) => (
    <SearchableList
      listItems={listItems}
      searchFieldOptions={searchFieldOptions}
    />
  ),
};
export default meta;

/**
 * Use `showContainer` to see the difference between `icon-inside` and `icon-outside` variants.
 * */
export const Overview: StoryObj<typeof SearchableList> = {};
