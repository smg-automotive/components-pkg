import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { SortIcon } from '../icons';
import Box from '../box';

import SelectMenuComponent, { SelectMenuProps } from './index';

const Template = (props: SelectMenuProps) => {
  const [args, updateArgs] = useArgs<SelectMenuProps>();

  return (
    <SelectMenuComponent
      {...{ ...props, ...args }}
      onChange={(v) => {
        updateArgs({ value: v.toString() });
        args.onChange?.(v);
      }}
    />
  );
};

const meta: Meta<typeof SelectMenuComponent> = {
  title: 'Patterns/Data Display/SelectMenu',
  component: SelectMenuComponent,
  decorators: [
    (Story) => (
      <Box h="200px">
        <Story />
      </Box>
    ),
  ],
  render: Template.bind({}),

  args: {
    title: 'Language',
    options: [
      { value: 'de', label: 'Detusch', onClick: action('Detusch') },
      { value: 'en', label: 'English', onClick: action('English') },
      { value: 'fr', label: 'Français', onClick: action('Français') },
      { value: 'it', label: 'Italiano', onClick: action('Italiano') },
    ],
    value: 'de',
    onChange: action('onChange'),
  },

  argTypes: {
    menuColor: {
      control: 'color',
    },
    menuOptionColor: {
      control: 'color',
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof SelectMenuComponent>;
export const Overview: StoryType = {};

export const WithoutIndicator: StoryType = {
  args: {
    withIndicator: false,
  },
};

export const TitleWithIcon = {
  args: {
    title: 'Language',
    leftIcon: <SortIcon />,
    menuColor: 'blue.700',
    withIndicator: false,
  },
};

export const WithCustomMenuAndMenuOptionColors = {
  args: {
    title: 'Language',
    menuColor: 'blue.700',
    menuOptionColor: 'red.700',
  },
};
