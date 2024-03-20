import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

import Button from '../button';
import Box from '../box';
import DrawerOverlay from './DrawerOverlay';
import DrawerContent from './DrawerContent';
import DrawerBody from './DrawerBody';

import DrawerComponent from './index';

const Template = (args) => {
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
      <Button onClick={onOpen}>Open</Button>
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

export default {
  title: 'Components/Data display/Drawer',
  component: DrawerComponent,

  parameters: {
    layout: 'fullscreen',
  },
};

export const Drawer = {
  render: Template.bind({}),
  name: 'Drawer',

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
