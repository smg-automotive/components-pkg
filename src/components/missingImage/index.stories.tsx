import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Primary, Subtitle, Title } from '@storybook/blocks';

import AspectRatio from '../aspectRatio';

import MissingImageComponent from './index';

const meta: Meta<typeof MissingImageComponent> = {
  title: 'Patterns/Data display/Missing image',
  component: MissingImageComponent,
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

export const MissingImage: StoryObj<typeof MissingImageComponent> = {
  name: 'Missing image',

  decorators: [
    (Story) => (
      <AspectRatio ratio={4 / 3} width="500px">
        <Story />
      </AspectRatio>
    ),
  ],
};
