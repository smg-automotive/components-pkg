import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Text, useDisclosure } from '@chakra-ui/react';

import Button from '../button';

import ModalComponent, { Props } from './index';

const Template = ({
  contentParagraphs,
  primaryActionLabel,
  secondaryActionLabel,
  ...args
}: Props & {
  contentParagraphs?: number;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <ModalComponent
        {...{
          ...args,
          primaryActionButton: primaryActionLabel
            ? {
                action: action('Primary'),
                label: primaryActionLabel,
              }
            : undefined,
          secondaryActionButton: secondaryActionLabel
            ? {
                action: action('Secondary'),
                label: secondaryActionLabel,
              }
            : undefined,
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        {Array.from({ length: contentParagraphs || 1 }).map((_, index) => (
          <Text p="4" key={`paragraph-${index}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            elementum ultricies vestibulum. Sed odio diam, tristique id velit
            sit amet, sodales aliquet magna. Fusce vitae orci vel nulla vehicula
            condimentum. Maecenas sollicitudin volutpat tellus, laoreet
            fringilla nibh. Vivamus luctus enim id quam feugiat, maximus
            porttitor justo ultrices. Nam tellus erat, porta nec consectetur
            eget, aliquet id purus. Suspendisse at elementum arcu. Suspendisse
            ac lobortis velit. Phasellus malesuada egestas est sit amet
            venenatis.
          </Text>
        ))}
      </ModalComponent>
    </>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/Modal',
  component: ModalComponent,
  render: Template.bind({}),

  args: {
    contentParagraphs: 1,
    title: 'Modal Header',
    size: 'md',
    variant: 'base',
    disableBodyPadding: false,
    motionPreset: 'scale',
    overlayColor: 'default',
  },

  argTypes: {
    size: {
      options: ['md', 'lg', 'full', 'auth0'],

      control: {
        type: 'select',
      },
    },

    variant: {
      options: ['fullScreen', 'base', 'topScroll'],

      control: {
        type: 'select',
      },
    },

    motionPreset: {
      options: [
        'slideInBottom',
        'slideInRight',
        'slideInTop',
        'slideInLeft',
        'scale',
        'none',
      ],

      control: {
        type: 'select',
      },
    },

    primaryActionLabel: {
      control: {
        type: 'text',
      },
    },

    secondaryActionLabel: {
      control: {
        type: 'text',
      },
    },

    overlayColor: {
      options: ['default', 'gray'],

      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Template>;
export const Overview: StoryType = {};

export const ModalWithoutHeader: StoryType = {
  args: {
    title: undefined,
  },
};

export const ModalWithPrimaryAction: StoryType = {
  args: {
    primaryActionLabel: 'Submit',
  },
};

export const ModalWithSecondaryAction: StoryType = {
  args: {
    secondaryActionLabel: 'Fire',
  },
};

export const ModalWithTwoActionButtons: StoryType = {
  args: {
    primaryActionLabel: 'Submit',
    secondaryActionLabel: 'Fire',
  },
};

export const FullScreenModal: StoryType = {
  args: {
    title: 'Full screen modal',
    variant: 'fullScreen',
    size: undefined,
  },
};

export const LargeScrollableModal: StoryType = {
  args: {
    title: 'Modal Header',
    size: 'md',
    variant: 'topScroll',
    contentParagraphs: 3,
  },
};

export const ModalWithoutModalBodyPadding: StoryType = {
  args: {
    disableBodyPadding: true,
  },
};

export const ModalWithGrayOverlay: StoryType = {
  args: {
    overlayColor: 'gray',
    contentParagraphs: 1,
    title: undefined,
  },
};
