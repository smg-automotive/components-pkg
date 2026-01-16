import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import { TooltipIcon } from '../icons';

import { HoverCard, PopoverProps } from './index';

const Template = ({
  hasCloseButton,
  size,
  showArrow,
  placement,
  closeOnBlur,
  gutter,
  trigger,
  content,
}: PopoverProps & { hasCloseButton: boolean }) => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <HoverCard
      onClose={onClose}
      content={
        hasCloseButton ? (
          <button onClick={() => onClose()}>Close</button>
        ) : (
          content
        )
      }
      size={size}
      showArrow={showArrow}
      placement={placement}
      closeOnBlur={closeOnBlur}
      gutter={gutter}
      trigger={trigger}
      onOpen={onOpen}
      isOpen={open}
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
    placement: 'auto',
    size: 'md',
    hasCloseButton: false,
  },

  argTypes: {
    placement: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
      control: 'select',
    },
    size: {
      options: ['md', 'xl'],
      control: 'select',
    },
    showArrow: {
      control: 'boolean',
    },
    trigger: {
      options: ['hover', 'click'],
      control: 'select',
      defaultValue: 'hover',
    },
    closeOnBlur: {
      control: 'boolean',
    },
    gutter: {
      control: 'number',
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

export const OpenOnClick: StoryType = {
  name: 'Open on click',
  args: {
    trigger: 'click',
  },
};

export const CloseOnClickOnButton: StoryType = {
  name: 'Close on click on button',
  args: {
    trigger: 'click',
    hasCloseButton: true,
  },
};
