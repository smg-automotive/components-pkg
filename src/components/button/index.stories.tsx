import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { VideoIcon } from '../icons';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    // rightIcon: <VideoIcon />,
    variant: 'secondary',
    // as: 'a',
    // isDisabled: false,
    size: { base: 'md', md: 'lg' },
  },
};

export default meta;

export const Overview: StoryObj<typeof Button> = {};
