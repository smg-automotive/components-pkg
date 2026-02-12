import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Switch, SwitchProps } from '.';

const Wrapper = (props: SwitchProps) => {
  const [args, updateArgs] = useArgs<SwitchProps>();
  return (
    <Switch
      {...props}
      {...args}
      onCheckedChange={(e) => {
        updateArgs({ checked: e.checked });
        args.onCheckedChange?.(e);
      }}
    />
  );
};

const meta: Meta<typeof Switch> = {
  title: 'Components/Forms/Switch',
  component: Switch,
  render: Wrapper,

  args: {
    checked: false,
    onCheckedChange: action('onChange'),
    label: 'Label',
    disabled: false,
    id: '1',
  },
};
export default meta;

type StoryType = StoryObj<typeof Switch>;
export const Overview: StoryType = {};
