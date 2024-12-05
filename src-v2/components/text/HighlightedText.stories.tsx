import { Meta, StoryObj } from '@storybook/react';

import HighlightedTextComponent from './HighlightedText';

const meta: Meta<typeof HighlightedTextComponent> = {
  title: 'Components/Utils/HighlightedText',
  component: HighlightedTextComponent,

  args: {
    text: 'Mercedes',
    highlightIndices: [
      [1, 3],
      [6, 6],
    ],
  },
};
export default meta;

export const Overview: StoryObj<typeof HighlightedTextComponent> = {};
