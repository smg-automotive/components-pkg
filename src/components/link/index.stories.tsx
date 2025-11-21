import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { ArrowLeftIcon, ErrorIcon } from '../index';

import { Link } from './index';

const meta: Meta<typeof Link> = {
  title: 'Components/Navigation/Link',
  component: Link,

  args: {
    href: '#href',
    children: 'I am a link',
    variant: 'baseLink' as const,
    disabled: false,
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

    ...getRecipeControls('link'),
  },
};
export default meta;

type StoryType = StoryObj<typeof Link>;
export const Overview: StoryType = {};

export const LinkWithLeftIcon: StoryType = {
  name: 'Link with Left icon',
  args: {
    children: [<ArrowLeftIcon key="icon" />, 'Back'],
  },
};

export const LinkWithRightIcon: StoryType = {
  name: 'Link with Right icon',
  args: {
    children: ['Go to External Link', <ErrorIcon key="icon" />],
  },
};

export const LinkWithBothIcons: StoryType = {
  name: 'Link with both icons',
  args: {
    children: [
      <ArrowLeftIcon key="icon-left" />,
      'Terms & conditions',
      <ErrorIcon key="icon-right" />,
    ],
  },
};

export const LinkAsPartOfAParagraph: StoryType = {
  name: 'Link as part of a paragraph',
  args: {
    children: 'Terms & conditions',
  },
  render: (args) => (
    <p>
      You must accept <Link {...args} /> to continue
    </p>
  ),
};

export const LinkWithRelAndTarget: StoryType = {
  name: 'Link with rel and target',
  args: {
    rel: 'noopener noreferrer',
    target: '_blank',
  },
};

export const ExternalLink: StoryType = {
  args: {
    isExternal: true,
    children: 'Go to External Link',
  },
};
