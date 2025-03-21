import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import Button from '../button';
import Box from '../box';
import DrawerOverlay from './DrawerOverlay';
import DrawerContent from './DrawerContent';
import DrawerBody from './DrawerBody';

import DrawerComponent, { type DrawerProps } from './index';

const Template = (
  args: Omit<DrawerProps, 'isOpen' | 'onClose'> & {
    withCloseButton?: boolean;
    viewMode?: string;
  },
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerHeight = '60px';
  return (
    <Box
      width="100%"
      height={headerHeight}
      pt="xs"
      px="sm"
      bg="gray.100"
      zIndex="popover"
    >
      <Button onClick={isOpen ? onClose : onOpen}>Toggle drawer</Button>
      <DrawerComponent isOpen={isOpen} onClose={onClose} {...args}>
        <DrawerOverlay />
        <DrawerContent
          withCloseButton={args?.withCloseButton}
          marginTop={args.viewMode === 'docs' ? 0 : headerHeight}
          p="md"
        >
          <DrawerBody p="lg">There is a drawer content</DrawerBody>
        </DrawerContent>
      </DrawerComponent>
    </Box>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/Drawer',
  render: Template.bind({}),

  decorators: [
    (Story, { args, viewMode }) => {
      return <Story args={{ ...args, viewMode }} />;
    },
  ],

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    placement: 'top',
    size: 'half',
    withCloseButton: false,
  },

  argTypes: {
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: 'select',
    },

    size: {
      options: ['xl', 'half', 'full'],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Template> = {};
