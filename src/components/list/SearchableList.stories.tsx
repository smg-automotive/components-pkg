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
        label: 'Option with Children',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        children: [
          {
            value: '10',
            label: 'Mountain Peak One',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
          },
          {
            value: '11',
            label: 'Desert Rose One',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
          },
          {
            value: '12',
            label: 'Forest Glade Wild',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
          },
        ],
      },
      {
        value: '7',
        label: 'Forest Glade Nature Reserve',
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
    searchFieldOptions: {
      placeholder: 'Search for options example',
    },
  },

  render: ({
    listItems,
    searchFieldOptions,
    listOptions = { columns: 1 },
    scrollToFirstSelectedItem,
  }: Props) => (
    <SearchableList
      listItems={listItems}
      searchFieldOptions={searchFieldOptions}
      listOptions={listOptions}
      scrollToFirstSelectedItem={scrollToFirstSelectedItem}
    />
  ),
};
export default meta;

type StoryType = StoryObj<typeof SearchableList>;

export const Overview: StoryType = {};

export const VariantCheckbox: StoryType = {
  name: 'Variant > Checkbox Options',
  args: {
    listItems: [
      {
        value: '5',
        label: 'Checkbox Option One',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '6',
        label: 'Checkbox with Children',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
        children: [
          {
            value: '100',
            label: 'Mountain Peak',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
          {
            value: '101',
            label: 'Desert Rose',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
          {
            value: '102',
            label: 'Forest Glade',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
        ],
      },
    ],
    searchFieldOptions: {
      placeholder: 'Search for options',
    },
    listOptions: { columns: 1, childrenSpacing: '2xl' },
  },
};

export const VariantColumns: StoryType = {
  name: 'Variant > Multiple Columns',
  args: {
    listItems: [
      {
        value: '5',
        label: 'Checkbox Option Two',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '5',
        label: 'Another Checkbox Option',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '6',
        label: 'Checkbox with Children',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
        children: [
          {
            value: '100',
            label: 'Mountain Peak',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
          {
            value: '101',
            label: 'Desert Rose',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
          {
            value: '102',
            label: 'Forest Glade',
            onClick: () => {},
            showChevron: false,
            isSelected: false,
            isCheckbox: true,
          },
        ],
      },
      {
        value: '5',
        label: 'Yes one more Checkbox Option ',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '5',
        label: 'Example',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '5',
        label: 'Checkbox Option',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '5',
        label: 'Checkbox Option Over 9000',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
    ],
    searchFieldOptions: {
      placeholder: 'Search for options',
    },
    listOptions: { columns: 2, childrenSpacing: '2xl' },
  },
};

export const ScrollToFirstSelected: StoryType = {
  name: 'Variant > Scroll to First Selected',
  parameters: {
    docs: {
      description: {
        story:
          'Automatically scrolls to the first selected checkbox item on initial mount.',
      },
    },
  },
  args: {
    scrollToFirstSelectedItem: true,
    listItems: [
      {
        value: '1',
        label: 'Checkbox Option One',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '2',
        label: 'Checkbox Option Two',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '3',
        label: 'Checkbox Option Three',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '4',
        label: 'Checkbox Option Four',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '5',
        label: 'First Selected Checkbox (should scroll here)',
        onClick: () => {},
        showChevron: false,
        isSelected: true,
        isCheckbox: true,
      },
      {
        value: '6',
        label: 'Checkbox Option Six',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '7',
        label: 'Second Selected Checkbox',
        onClick: () => {},
        showChevron: false,
        isSelected: true,
        isCheckbox: true,
      },
      {
        value: '8',
        label: 'Checkbox Option Eight',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '9',
        label: 'Checkbox Option Nine',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
      {
        value: '10',
        label: 'Checkbox Option Ten',
        onClick: () => {},
        showChevron: false,
        isSelected: false,
        isCheckbox: true,
      },
    ],
    searchFieldOptions: {
      placeholder: 'Search for options',
    },
  },
};
