import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { iconControl } from 'src/storybook/ControlTypes';
import { ShareIcon, VideoIcon } from 'src';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  args: {
    isDisabled: false,
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    onClick: action('onClick'),
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'transparent'],
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    children: {
      control: 'text',
    },

    leftIcon: iconControl,
    rightIcon: iconControl,
    icon: iconControl,
  },
};
export default meta;
type StoryType = StoryObj<typeof Button>;

export const Overview: StoryType = {};

export const VariantPrimary: StoryType = {
  name: 'Variant > Primary',
  args: {
    children: 'Primary Button',
  },
};

export const VariantSecondary: StoryType = {
  name: 'Variant > Secondary',
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const VariantSuccess: StoryType = {
  name: 'Variant > Success',
  args: {
    children: 'Success Button',
    variant: 'success',
  },
};

export const VariantTransparent: StoryType = {
  name: 'Variant > Transparent',
  args: {
    variant: 'transparent',
    children: 'Transparent Button',
  },
};

export const SizesMedium: StoryType = {
  name: 'Sizes > Medium',
  args: {
    size: 'md',
  },
};

export const SizesLarge: StoryType = {
  name: 'Sizes > Large',
  args: {
    size: 'lg',
  },
};

export const StateDisabled: StoryType = {
  name: 'Sate > Disabled',
  args: {
    isDisabled: true,
  },
};

export const AsLink: StoryType = {
  args: {
    as: 'a',
    href: '#href',
  },
};

export const WithLeftIcon: StoryType = {
  args: {
    leftIcon: <VideoIcon />,
  },
};

export const WithRightIcon: StoryType = {
  args: {
    rightIcon: <VideoIcon />,
  },
};

export const IconButton: StoryType = {
  name: 'Icon button',

  args: {
    children: undefined,
    icon: <ShareIcon />,
    ariaLabel: 'Share to Facebook',
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },

    rightIcon: {
      table: {
        disable: true,
      },
    },

    leftIcon: {
      table: {
        disable: true,
      },
    },
  },
};
