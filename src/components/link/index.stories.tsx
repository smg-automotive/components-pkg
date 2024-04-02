import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ArrowLeftIcon, ErrorIcon } from '../index';

import LinkComponent from './index';

const meta: Meta<typeof LinkComponent> = {
  title: 'Components/Navigation/Link',
  component: LinkComponent,

  args: {
    href: '#href',
    children: 'I am a link',
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },

    rel: {
      control: 'text',
    },

    target: {
      control: 'text',
    },

    isExternal: {
      control: 'boolean',
    },

    variant: {
      control: 'select',
      options: ['baseLink', 'navigationLink', 'subNavigationLink'],
    },

    fontWeight: {
      control: 'select',
      options: ['regular', 'bold'],
    },

    color: {
      control: 'color',
    },
  },
};

export default meta;

export const Link = {};

export const LinkWithLeftIcon = {
  name: 'Link with Left icon',
  args: {
    leftIcon: <ArrowLeftIcon />,
    children: 'Back',
  },
};

export const LinkWithRightIcon = {
  name: 'Link with Right icon',
  args: {
    rightIcon: <ErrorIcon />,
    children: 'Go to External Link',
  },
};

export const LinkWithBothIcons = {
  name: 'Link with both icons',
  args: {
    leftIcon: <ArrowLeftIcon />,
    rightIcon: <ErrorIcon />,
    children: 'Terms & conditions',
  },
};

export const LinkAsPartOfAParagraph: StoryObj<typeof Link> = {
  name: 'Link as part of a paragraph',
  args: {
    children: 'Terms & conditions',
  },
  render: (args) => (
    <p>
      You must accept <LinkComponent {...args} /> to continue
    </p>
  ),
};

export const LinkWithRelAndTarget = {
  name: 'Link with rel and target',
  args: {
    rel: 'noopener noreferrer',
    target: '_blank',
  },
};

export const ExternalLink = {
  args: {
    isExternal: true,
    children: 'Go to External Link',
  },
};
