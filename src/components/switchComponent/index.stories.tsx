import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
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
};
export default meta;

export const Switch = {
  args: {
    variant: 'default',
    isChecked: false,
    onChange: action('onChange'),
  },

  argTypes: {
    variant: {
      options: ['themeSwitch', 'default'],
      control: 'select',
    },
  },
};