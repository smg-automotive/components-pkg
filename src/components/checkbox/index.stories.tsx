import { useState } from 'react';

import { Stack } from 'src/index.ts';

import Checkbox from './index.tsx';

const Template = ({ isChecked, ...args }) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <Checkbox
      {...args}
      isChecked={checked}
      onChange={(e) => setChecked(e.target.checked)}
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
      />
      <Stack pl="lg" mt="s" spacing="s">
        <Checkbox
          label="Child Checkbox 1"
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        />
        <Checkbox
          label="Child Checkbox 2"
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        />
      </Stack>
    </>
  );
};

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

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
  name: 'Selected',

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
  name: 'Invalid',

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
      <Checkbox isDisabled={true} label="Disabled" />
      <Checkbox isDisabled={true} isChecked={true} label="Disabled checked" />
    </Stack>
  ),

  name: 'Disabled',
};

export const Indeterminate = {
  render: IndeterminateTemplate.bind({}),
  name: 'Indeterminate',
};
