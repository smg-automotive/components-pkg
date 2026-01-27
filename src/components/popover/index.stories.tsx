import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import { TooltipIcon } from '../icons';

import { Popover, PopoverProps } from './index';

const Template = ({
  size,
  placement,
  content,
  hasCloseButton,
  showArrow,
  closeOnInteractOutside,
}: PopoverProps & { hasCloseButton: boolean }) => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Popover
      content={
        hasCloseButton ? (
          <button onClick={() => onClose()}>Close</button>
        ) : (
          content
        )
      }
      size={size}
      placement={placement}
      open={open}
      onOpenChange={(e) => (e.open ? onOpen() : onClose())}
      showArrow={showArrow}
      closeOnInteractOutside={closeOnInteractOutside}
    >
      <TooltipIcon />
    </Popover>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/Overlay/Popover',
  component: Popover,
  render: Template.bind({}),

  args: {
    content: 'I am Popover content',
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
    closeOnInteractOutside: {
      control: 'boolean',
    },
  },
};

export default meta;
type StoryType = StoryObj<typeof Template>;

export const Overview: StoryObj<typeof Popover> = {};

export const HasCloseButton: StoryType = {
  name: 'HasCloseButton',
  args: {
    hasCloseButton: true,
  },
};
