import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Primary, Subtitle, Title } from '@storybook/blocks';

import AspectRatio from '../aspectRatio';

import MissingImageComponent from './index';

const meta: Meta<typeof MissingImageComponent> = {
  title: 'Patterns/Data display/Missing image',
  component: MissingImageComponent,
  decorators: [
    (Story) => (
      <AspectRatio ratio={4 / 3} width="500px">
        <Story />
      </AspectRatio>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
        </>
      ),
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof MissingImageComponent> = {};
