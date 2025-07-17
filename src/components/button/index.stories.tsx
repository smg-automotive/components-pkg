import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { iconControl } from 'src/storybook/ControlTypes';

import { ShareIcon, VideoIcon } from '../icons';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: { base: 'md', lg: 'lg' },
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

export const Overview: StoryObj<typeof Button> = {};

export const VariantPrimary: StoryObj<typeof Button> = {
  name: 'Variant > Primary',
  args: {
    children: 'Primary Button',
  },
};

export const VariantSecondary: StoryObj<typeof Button> = {
  name: 'Variant > Secondary',
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const VariantSuccess: StoryObj<typeof Button> = {
  name: 'Variant > Success',
  args: {
    children: 'Success Button',
    variant: 'success',
  },
};

export const VariantTransparent: StoryObj<typeof Button> = {
  name: 'Variant > Transparent',
  args: {
    variant: 'transparent',
    children: 'Transparent Button',
  },
};

export const SizesMedium: StoryObj<typeof Button> = {
  name: 'Sizes > Medium',
  args: {
    size: 'md',
  },
};

export const SizesLarge: StoryObj<typeof Button> = {
  name: 'Sizes > Large',
  args: {
    size: 'lg',
  },
};

export const StateDisabled: StoryObj<typeof Button> = {
  name: 'Sate > Disabled',
  args: {
    disabled: true,
  },
};

export const AsLink: StoryObj<typeof Button> = {
  args: {
    as: 'a',
    href: '#href',
    isExternal: true,
  },
};

export const WithLeftIcon: StoryObj<typeof Button> = {
  args: {
    leftIcon: <VideoIcon />,
  },
};

export const WithRightIcon: StoryObj<typeof Button> = {
  args: {
    rightIcon: <VideoIcon />,
  },
};

export const IconButton: StoryObj<typeof Button> = {
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
