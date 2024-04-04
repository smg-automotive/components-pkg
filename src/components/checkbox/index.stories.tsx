import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  render: (props) => {
    const [args, updateArgs] = useArgs();

    return (
      <Checkbox
        {...args}
        {...props}
        onChange={(e) => {
          updateArgs({ isChecked: e.target.checked });
          args.onChange?.(e);
        }}
      />
    );
  },

  args: {
    name: 'test-checkbox',
    value: '1',
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    label: 'Test Checkbox',
    onChange: action('onChange'),
  },

  argTypes: {
    label: {
      control: 'text',
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Checkbox>;
export const StateDefault: StoryType = {
  name: 'State > Default',
};

export const StateChecked: StoryType = {
  name: 'State > Checked',
  args: {
    isChecked: true,
    label: 'Checked',
  },
};

export const StateInvalid: StoryType = {
  name: 'State > Invalid',
  args: {
    isInvalid: true,
    label: 'Invalid',
  },
};

/**
 * Indeterminate state is used when some of the children checkoxes are checked
 **/
export const StateIndeterminate = {
  name: 'State > Indeterminate',
  args: {
    isIndeterminate: true,
  },
};

export const Disabled: StoryType = {
  name: 'State > Disabled',
  args: {
    isDisabled: true,
    label: 'Disabled',
  },
};

export const DisabledChecked: StoryType = {
  name: 'State > Disabled & Checked',
  args: {
    isDisabled: true,
    isChecked: true,
    label: 'Disabled & Checked',
  },
};
