import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Stack } from 'src/index';

import Checkbox, { type CheckboxProps } from './index';

const Template = ({ isChecked, ...args }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <Checkbox
      {...args}
      isChecked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
        action('onChange')(e);
      }}
    />
  );
};

const IndeterminateTemplate = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <>
      <Checkbox
        label="Parent Checkbox"
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        name="parent-checkbox"
      />
      <Stack paddingX="lg" marginY="s" spacing="s">
        <Checkbox
          label="Child Checkbox 1"
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          name="child-checkbox-1"
        />
        <Checkbox
          label="Child Checkbox 2"
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          name="child-checkbox-2"
        />
      </Stack>
    </>
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      table: { disable: true },
    },
    isChecked: {
      table: { disable: true },
    },
  },
};

export const Overview = {
  render: Template.bind({}),

  args: {
    name: 'Control',
    value: 1,
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    label: 'Regular',
  },
};

export const Selected = {
  render: Template.bind({}),

  args: {
    name: 'Control',
    value: 1,
    isChecked: true,
    isDisabled: false,
    label: 'Selected',
  },
};

export const Invalid = {
  render: Template.bind({}),

  args: {
    name: 'Control',
    value: 1,
    isChecked: false,
    isDisabled: false,
    isInvalid: true,
    label: 'Invalid',
  },
};

export const Disabled = {
  render: () => (
    <Stack spacing="lg" direction="row">
      <Checkbox isDisabled={true} label="Disabled" name="disabled-1" />
      <Checkbox
        isDisabled={true}
        isChecked={true}
        label="Disabled checked"
        name="disabled-2"
      />
    </Stack>
  ),
};

export const Indeterminate = {
  render: IndeterminateTemplate.bind({}),
};

export default meta;
