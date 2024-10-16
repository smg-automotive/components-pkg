import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import SwitchComponent, { SwitchProps } from './index';

const Wrapper = (props: SwitchProps) => {
  const [args, updateArgs] = useArgs<SwitchProps>();
  return (
    <SwitchComponent
      {...props}
      {...args}
      onChange={(e) => {
        updateArgs({ isChecked: e.target.checked });
        args.onChange?.(e);
      }}
    />
  );
};

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Forms/Switch',
  component: SwitchComponent,
  render: Wrapper,

  args: {
    isChecked: false,
    onChange: action('onChange'),
    label: 'Label',
    isDisabled: false,
  },
};
export default meta;

export const Overview: StoryObj<typeof SwitchComponent> = {};
