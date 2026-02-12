import { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from './index';

const meta: Meta<typeof CloseButton> = {
  title: 'Components/Button/CloseButton',
  component: CloseButton,

  args: {
    disabled: false,
  },
};
export default meta;

type StoryType = StoryObj<typeof CloseButton>;
export const StateDefault: StoryType = {
  name: 'State > Default',
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',
  args: {
    disabled: true,
  },
};
