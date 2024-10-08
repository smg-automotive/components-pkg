import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import SwitchComponent, { SwitchProps } from './index';

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Forms/Switch',
  component: SwitchComponent,

  render: (props) => {
    const [args, updateArgs] = useArgs<SwitchProps>();
    return (
      <SwitchComponent
        {...props}
        {...args}
        onChange={(e) => {
          updateArgs({ isChecked: e.target.checked });
          args.onChange && args.onChange(e);
        }}
      />
    );
  },

  args: {
    isChecked: false,
    onChange: action('onChange'),
    label: 'Label',
    isDisabled: false,
  },
};
export default meta;

export const Overview: StoryObj<typeof SwitchComponent> = {};
