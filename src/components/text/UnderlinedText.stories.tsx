import { Meta, StoryObj } from '@storybook/react';

import UnderlinedTextComponent from './UnderlinedText';

const meta: Meta<typeof UnderlinedTextComponent> = {
  title: 'Components/Utils/UnderlinedText',
  component: UnderlinedTextComponent,

  args: {
    children: 'I am underlined',
  },

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof UnderlinedTextComponent> = {};
