import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Checkbox, CheckboxProps } from './index';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

const Wrapper = (args: CheckboxProps) => {
  const [{ checked }, updateArgs] = useArgs();

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(details) => {
        updateArgs({ checked: !checked });
        action('onChange')(details);
      }}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  args: {
    name: 'test-checkbox',
    value: '1',
    disabled: false,
    checked: false,
    invalid: false,
    indeterminate: false,
    readOnly: false,
    fullWidth: false,
    label: 'Test Checkbox',
    paddingY: '0',
    fontWeight: 'regular',
    variant: 'alignCenter',
  },
  argTypes: {
    ...getRecipeControls('checkbox'),
  },
};

export default meta;

type StoryType = StoryObj<typeof Checkbox>;

export const StateDefault: StoryType = {
  name: 'State > Default',
  render: Wrapper,
};

export const StateChecked: StoryType = {
  name: 'State > Checked',
  render: Wrapper,
  args: {
    checked: true,
    label: 'Checked',
  },
};

export const StateInvalid: StoryType = {
  name: 'State > Invalid',
  render: Wrapper,
  args: {
    invalid: true,
    label: 'Invalid',
  },
};

/*** Indeterminate state is used when some of the children checkboxes are checked */
export const StateIndeterminate: StoryType = {
  name: 'State > Indeterminate',
  render: Wrapper,
  args: {
    indeterminate: true,
    label: 'Indeterminate',
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',
  render: Wrapper,
  args: {
    disabled: true,
    label: 'Disabled',
  },
};

export const StateDisabledChecked: StoryType = {
  name: 'State > Disabled & Checked',
  render: Wrapper,
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled & Checked',
  },
};
