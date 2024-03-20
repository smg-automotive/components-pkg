import React from 'react';

import { action } from '@storybook/addon-actions';
import { useDisclosure } from '@chakra-ui/react';

import Button from '../button';
import Box from '../box';

import ModalComponent from './index';

const ModalTemplate = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={onOpen}>Open</Button>
      <ModalComponent isOpen={isOpen} onClose={onClose} {...args}>
        <Box p="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          elementum ultricies vestibulum. Sed odio diam, tristique id velit sit
          amet, sodales aliquet magna. Fusce vitae orci vel nulla vehicula
          condimentum. Maecenas sollicitudin volutpat tellus, laoreet fringilla
          nibh. Vivamus luctus enim id quam feugiat, maximus porttitor justo
          ultrices. Nam tellus erat, porta nec consectetur eget, aliquet id
          purus. Suspendisse at elementum arcu. Suspendisse ac lobortis velit.
          Phasellus malesuada egestas est sit amet venenatis.
        </Box>
      </ModalComponent>
    </Box>
  );
};

const ModalTemplateWithMoreContent = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={onOpen}>Open</Button>
      <ModalComponent isOpen={isOpen} onClose={onClose} {...args}>
        <Box p="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          elementum ultricies vestibulum. Sed odio diam, tristique id velit sit
          amet, sodales aliquet magna. Fusce vitae orci vel nulla vehicula
          condimentum. Maecenas sollicitudin volutpat tellus, laoreet fringilla
          nibh. Vivamus luctus enim id quam feugiat, maximus porttitor justo
          ultrices. Nam tellus erat, porta nec consectetur eget, aliquet id
          purus. Suspendisse at elementum arcu. Suspendisse ac lobortis velit.
          Phasellus malesuada egestas est sit amet venenatis.
        </Box>
        <Box p="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          elementum ultricies vestibulum. Sed odio diam, tristique id velit sit
          amet, sodales aliquet magna. Fusce vitae orci vel nulla vehicula
          condimentum. Maecenas sollicitudin volutpat tellus, laoreet fringilla
          nibh. Vivamus luctus enim id quam feugiat, maximus porttitor justo
          ultrices. Nam tellus erat, porta nec consectetur eget, aliquet id
          purus. Suspendisse at elementum arcu. Suspendisse ac lobortis velit.
          Phasellus malesuada egestas est sit amet venenatis.
        </Box>
        <Box p="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          elementum ultricies vestibulum. Sed odio diam, tristique id velit sit
          amet, sodales aliquet magna. Fusce vitae orci vel nulla vehicula
          condimentum. Maecenas sollicitudin volutpat tellus, laoreet fringilla
          nibh. Vivamus luctus enim id quam feugiat, maximus porttitor justo
          ultrices. Nam tellus erat, porta nec consectetur eget, aliquet id
          purus. Suspendisse at elementum arcu. Suspendisse ac lobortis velit.
          Phasellus malesuada egestas est sit amet venenatis.
        </Box>
      </ModalComponent>
    </Box>
  );
};

export default {
  title: 'Components/Data display/Modal',
  component: ModalComponent,
};

export const Modal = {
  render: ModalTemplate.bind({}),
  name: 'Modal',

  args: {
    title: 'Modal Header',
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['md', 'lg'],

      control: {
        type: 'select',
      },
    },
  },
};

export const ModalWithoutHeader = {
  render: ModalTemplate.bind({}),
  name: 'Modal Without Header',

  args: {
    primaryActionButton: {
      action: action('Submit'),
      label: 'Submit',
    },
  },
};

export const ModalWithFooter = {
  render: ModalTemplate.bind({}),
  name: 'Modal With Footer',

  args: {
    title: 'Modal Header',

    primaryActionButton: {
      action: action('Submit'),
      label: 'Submit',
    },
  },
};

export const ModalWith2ActionButtons = {
  render: ModalTemplate.bind({}),
  name: 'Modal With 2 Action Buttons',

  args: {
    title: 'Modal Header',

    primaryActionButton: {
      action: action('Submit'),
      label: 'Submit',
    },

    secondaryActionButton: {
      action: action('Fire'),
      label: 'Fire',
    },
  },
};

export const FullScreenModal = {
  render: ModalTemplate.bind({}),
  name: 'Full screen Modal',

  args: {
    title: 'Full screen modal',
    variant: 'fullScreen',
  },
};

export const LargeScrollableModal = {
  render: ModalTemplateWithMoreContent.bind({}),
  name: 'Large Scrollable Modal',

  args: {
    title: 'Modal Header',
    size: 'md',
    variant: 'topScroll',
  },

  argTypes: {
    size: {
      options: ['md', 'lg'],

      control: {
        type: 'select',
      },
    },
  },
};

export const ModalWithoutModalBodyPadding = {
  render: ModalTemplate.bind({}),
  name: 'Modal Without Modal Body Padding',

  args: {
    title: 'Modal Header',
    disableBodyPadding: true,
  },
};
