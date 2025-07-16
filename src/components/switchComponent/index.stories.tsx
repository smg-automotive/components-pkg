import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import SwitchComponent, { SwitchComponentProps } from '.';

const Wrapper = (props: SwitchComponentProps) => {
  const [args, updateArgs] = useArgs<SwitchComponentProps>();
  return (
    <SwitchComponent
      {...props}
      {...args}
      onChange={(e) => {
        updateArgs({ isChecked: e.checked });
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
    id: '1',
  },
};
export default meta;

type StoryType = StoryObj<typeof SwitchComponent>;
export const Overview: StoryType = {};
