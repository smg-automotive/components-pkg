import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  CardBody,
  Card as CardComponent,
  CardFooter,
  CardHeader,
} from './index';

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Data display/Card',
  component: CardComponent,

  args: {
    maxWidth: 400,
    children: [
      <CardHeader key="header">Card Header</CardHeader>,
      <CardBody key="body">Card Body</CardBody>,
      <CardFooter key="footer">Card Footer</CardFooter>,
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

export const Overview: StoryObj<typeof CardComponent> = {};
