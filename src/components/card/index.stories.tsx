import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';

const meta: Meta<typeof Card.Root> = {
  title: 'Components/Data display/Card',
  component: Card.Root,

  args: {
    css: {
      '--max-width': '400px'
    },
    maxWidth: 'var(--max-width)',
    children: [
      <Card.Header key="header">Card Header</Card.Header>,
      <Card.Body key="body">Card Body</Card.Body>,
      <Card.Footer key="footer">Card Footer</Card.Footer>,
    ],
  },

  argTypes: {
    maxWidth: {
      control: {
        type: 'number',
        step: 50,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Card> = {};
