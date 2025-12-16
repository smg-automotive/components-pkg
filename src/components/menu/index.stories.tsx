import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { VideoIcon } from '../icons';
import { Center } from '../center';
import { Box } from '../box';

import { Menu } from './index';

const meta: Meta<typeof Menu> = {
  title: 'Patterns/Data Display/Menu',
  component: Menu,

  decorators: [
    (Story) => (
      <Center>
        <Box h="7xl" display="flex" alignItems="center">
          <Story />
        </Box>
      </Center>
    ),
  ],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top',
        'top-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
      ],
    },
    fontWeightTitle: {
      control: 'select',
      options: ['regular', 'bold'],
    },
    iconSpacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    menuColor: {
      control: 'color',
    },
    menuOptionColor: {
      control: 'color',
    },
  },
  args: {
    items: [
      { text: 'Deutsch', onClick: action('Deutsch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],
    title: 'Language',
    showChevron: true,
    placement: 'bottom-start',
    offset: [8, 0],
    fontWeightTitle: 'regular',
    iconSpacing: 'sm',
    value: 'de', // initial selection
    showOptionsCheckmark: false,
  },
};
export default meta;

type Story = StoryObj<typeof Menu>;

const StatefulMenu = (args: React.ComponentProps<typeof Menu>) => {
  const [selectedValue, setSelectedValue] = React.useState(
    args.value ?? args.items[0]?.value,
  );

  const items = args.items.map((item) => ({
    ...item,
    onClick: () => {
      setSelectedValue(item.value);
      item.onClick?.();
    },
  }));

  return (
    <Menu
      {...args}
      items={items}
      value={selectedValue}
      showOptionsCheckmark={args.showOptionsCheckmark ?? true}
    />
  );
};

export const Overview: Story = {
  render: (args) => <StatefulMenu {...args} />,
};

export const WithLeftIcon: Story = {
  render: (args) => <StatefulMenu {...args} />,
  args: {
    icon: <VideoIcon />,
  },
  argTypes: {
    icon: {
      table: { disable: true },
    },
  },
};

export const WithOptionsCheckmark: Story = {
  render: (args) => <StatefulMenu {...args} />,
  args: {
    showOptionsCheckmark: true,
    items: [
      { text: 'Deutsch', onClick: action('Deutsch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],
    value: 'de',
  },
};

export const WithoutIndicator: Story = {
  render: (args) => <StatefulMenu {...args} />,
  args: {
    showChevron: false,
    items: [
      { text: 'Deutsch', onClick: action('Deutsch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],
    value: 'de',
  },
};

export const WithCustomMenuAndOptionColors: Story = {
  render: (args) => <StatefulMenu {...args} />,
  args: {
    menuColor: 'purple.600',
    menuOptionColor: 'orange.600',
    items: [
      { text: 'Deutsch', onClick: action('Deutsch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],

    value: 'de',
  },
};
