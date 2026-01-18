import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TooltipIcon } from '../icons';

import { HoverCard, PopoverProps } from './index';

const Template = ({
  size,
  showArrow,
  placement,
  content,
}: PopoverProps & { hasCloseButton: boolean }) => {
  return (
    <HoverCard
      content={content}
      size={size}
      showArrow={showArrow}
      placement={placement}
    >
      <TooltipIcon />
    </HoverCard>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/Overlay/HoverCard',
  component: HoverCard,
  render: Template.bind({}),

  args: {
    content: 'I am HoverCard content',
    placement: 'top',
    size: 'md',
    hasCloseButton: false,
  },

  argTypes: {
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: 'select',
    },
    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
    showArrow: {
      control: 'boolean',
    },
  },
};

export default meta;
type StoryType = StoryObj<typeof Template>;

export const Overview: StoryObj<typeof HoverCard> = {};

export const NoArrow: StoryType = {
  name: 'No arrow',
  args: {
    showArrow: false,
  },
};

export const Arrow: StoryType = {
  name: 'Arrow',
  args: {
    showArrow: true,
  },
};
