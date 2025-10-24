import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Flex } from '@chakra-ui/react';

import { NumberInputInput, NumberInputRoot } from './Parts';

type SingleDemoProps = {
  variant?: 'outline' | 'inputLeft' | 'inputRight';
  size?: 'sm' | 'md' | 'lg';
  defaultValue?: number | string;
  placeholder?: string;
  ariaLabel?: string;
};

const SingleDemo: React.FC<SingleDemoProps> = ({
  variant = 'outline',
  size = 'lg',
  defaultValue = 5,

  placeholder = 'Qty',
  ariaLabel = 'qty',
}) => (
  <Box style={{ maxWidth: 270 }}>
    <NumberInputRoot variant={variant} size={size} defaultValue={defaultValue}>
      <NumberInputInput
        variant={variant}
        size={size}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </NumberInputRoot>
  </Box>
);

type RangeDemoProps = {
  size?: 'sm' | 'md' | 'lg';
  fromDefault?: number | string;
  toDefault?: number | string;
};

const RangeDemo: React.FC<RangeDemoProps> = ({
  size = 'lg',
  fromDefault,
  toDefault,
}) => (
  <Flex style={{ maxWidth: 270 }} gap="0">
    <Box flex="1">
      <NumberInputRoot
        variant="inputLeft"
        size={size}
        defaultValue={fromDefault}
      >
        <NumberInputInput
          variant="inputLeft"
          size={size}
          placeholder="From"
          aria-label="from"
        />
      </NumberInputRoot>
    </Box>
    <Box flex="1">
      <NumberInputRoot
        variant="inputRight"
        size={size}
        defaultValue={toDefault}
      >
        <NumberInputInput
          variant="inputRight"
          size={size}
          placeholder="To"
          aria-label="to"
        />
      </NumberInputRoot>
    </Box>
  </Flex>
);

const meta: Meta<typeof SingleDemo> = {
  title: 'Sandbox/NumberInput Recipe',
  component: SingleDemo,
  args: {
    variant: 'outline',
    size: 'lg',
    defaultValue: 5,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['outline', 'inputLeft', 'inputRight'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    defaultValue: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<typeof SingleDemo>;

export const Outline: Story = {};

// “Range-like” showcase
export const RangeLikeEmpty: StoryObj<typeof RangeDemo> = {
  render: (args) => <RangeDemo {...args} />,
  args: {
    size: 'lg',
  },
};

export const RangeLikeWithDefaults: StoryObj<typeof RangeDemo> = {
  render: (args) => <RangeDemo {...args} />,
  args: {
    size: 'lg',
    fromDefault: 100,
    toDefault: 200,
  },
};
