import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';

const meta: Meta<typeof Card.Root> = {
  title: 'Components/Data display/Card',
  component: Card.Root,

  args: {
    css: {
      '--max-width': '400px',
    },
    maxWidth: 'var(--max-width)',
    children: ['header', 'body', 'footer'],
  },

  argTypes: {
    maxWidth: {
      control: {
        type: 'number',
        value: 400,
        step: 50,
      },
    },
    children: {
      table: {
        disable: true,
      },
      mapping: {
        header: (<Card.Header key="header">Card Header</Card.Header>),
        body: (<Card.Body key="body">Card Body</Card.Body>),
        footer: (<Card.Footer key="footer">Card Footer</Card.Footer>),
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Card> = {};
