import React from 'react';
import { Meta } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import Button from '../button';
import Box from '../box';
import DrawerOverlay from './DrawerOverlay';
import DrawerContent from './DrawerContent';
import DrawerBody from './DrawerBody';

import DrawerComponent, { type DrawerProps } from './index';

const Template = (
  args: Omit<DrawerProps, 'isOpen' | 'onClose'> & { withCloseButton?: boolean },
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headerHeight = '60px';
  return (
    <Box
      width="100%"
      height={headerHeight}
      position="absolute"
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
          marginTop={headerHeight}
          p="md"
        >
          <DrawerBody p="lg">There is a drawer content</DrawerBody>
        </DrawerContent>
      </DrawerComponent>
    </Box>
  );
};

/**
 * Drawer is misplaced in the documentation view due to positioning.
 * Visit the story directly to see the proper placement.
 */
const meta: Meta<typeof DrawerComponent> = {
  title: 'Components/Data display/Drawer',
  component: DrawerComponent,
  decorators: [
    (Story) => (
      <Box height="60px">
        <Story />
      </Box>
    ),
  ],
};

export const Drawer = {
  render: Template.bind({}),

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
