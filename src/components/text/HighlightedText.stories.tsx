import { Meta, StoryObj } from '@storybook/react';

import { HighlightedText } from './HighlightedText';

const meta: Meta<typeof HighlightedText> = {
  title: 'Components/Utils/HighlightedText',
  component: HighlightedText,

  args: {
    text: 'Mercedes',
    highlightIndices: [
      [1, 3],
      [6, 6],
    ],
  },
};
export default meta;

export const Overview: StoryObj<typeof HighlightedText> = {};
