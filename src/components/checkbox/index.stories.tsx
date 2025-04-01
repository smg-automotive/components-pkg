import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Checkbox, CheckboxProps } from './index';

const Wrapper = (args: CheckboxProps) => {
  const [{ isChecked }, updateArgs] = useArgs();

  return (
    <Checkbox
      {...args}
      isChecked={isChecked}
      onChange={(details) => {
        updateArgs({ isChecked: !isChecked });
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
    isDisabled: false,
    isChecked: false,
    isInvalid: false,
    isIndeterminate: false,
    readOnly: false,
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
    isChecked: true,
    label: 'Checked',
  },
};

export const StateInvalid: StoryType = {
  name: 'State > Invalid',
  render: Wrapper,
  args: {
    isInvalid: true,
    label: 'Invalid',
  },
};

/*** Indeterminate state is used when some of the children checkboxes are checked */
export const StateIndeterminate: StoryType = {
  name: 'State > Indeterminate',
  render: Wrapper,
  args: {
    isIndeterminate: true,
    label: 'Indeterminate',
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',
  render: Wrapper,
  args: {
    isDisabled: true,
    label: 'Disabled',
  },
};

export const StateDisabledChecked: StoryType = {
  name: 'State > Disabled & Checked',
  render: Wrapper,
  args: {
    isDisabled: true,
    isChecked: true,
    label: 'Disabled & Checked',
  },
};
