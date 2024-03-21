import React, { useState } from 'react';

import CheckboxGroup, { type CheckboxGroupProps } from './index';

const Template = (args: CheckboxGroupProps) => {
  const [state, setState] = useState({
    [0]: true,
    [1]: false,
    [2]: false,
    [3]: false,
  });
  const checkboxes = [
    {
      label: 'First child',
      name: 'First child',
      isChecked: state[0],
      onChange: () => setState({ ...state, [0]: !state[0] }),
    },
    {
      label: 'Second child',
      name: 'Second child',
      isChecked: state[1],
      onChange: () => setState({ ...state, [1]: !state[1] }),
    },
    {
      label: 'Third child',
      name: 'Third child',
      isChecked: state[2],
      onChange: () => setState({ ...state, [2]: !state[2] }),
    },
    {
      label: 'Fourth child',
      name: 'Fourth child',
      isChecked: state[3],
      onChange: () => setState({ ...state, [3]: !state[3] }),
    },
  ];
  const uncheckAll = () =>
    setState({
      [0]: false,
      [1]: false,
      [2]: false,
      [3]: false,
    });
  const checkAll = () =>
    setState({
      [0]: true,
      [1]: true,
      [2]: true,
      [3]: true,
    });
  const parentOnChange = () => {
    if (allChecked) {
      uncheckAll();
    } else {
      checkAll();
    }
  };
  const allChecked = checkboxes.every((checkbox) => checkbox.isChecked);
  const isIndeterminate =
    checkboxes.some((checkbox) => checkbox.isChecked) && !allChecked;
  return (
    <CheckboxGroup
      {...args}
      isChecked={allChecked}
      onChange={parentOnChange}
      isIndeterminate={isIndeterminate}
      checkboxes={checkboxes}
    />
  );
};

export default {
  title: 'Components/Forms/Checkbox Group',
  component: CheckboxGroup,
};

export const Overview = {
  render: Template.bind({}),
  args: {
    name: 'Control',
    value: 1,
    isDisabled: false,
    isInvalid: false,
    label: 'Parent item',
    addDividerAfterIndex: [2],
    size: 'md',
  },
};
