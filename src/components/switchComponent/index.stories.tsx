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
      onCheckedChange={(e) => {
        updateArgs({ checked: e.checked });
        args.onCheckedChange?.(e);
      }}
    />
  );
};

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Forms/Switch',
  component: SwitchComponent,
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

type StoryType = StoryObj<typeof SwitchComponent>;
export const Overview: StoryType = {};
