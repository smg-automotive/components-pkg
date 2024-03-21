import { useState } from 'react';

import Radio from './index';

export const Template = ({ isChecked, ...args }) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <Radio
      {...args}
      value="Option"
      label="Option"
      isChecked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    isDisabled: false,
    isInvalid: false,
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'base', 'md'],
      control: 'select',
    },
  },
};
