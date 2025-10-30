import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Props, Radio } from './index';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <Radio
      {...props}
      {...args}
      onChange={(e) => {
        const next = !(args.checked ?? false); // toggle
        updateArgs({ checked: next });
        action('onChange')(e);
      }}
    />
  );
};

const meta: Meta<typeof Radio> = {
  title: 'Components/Forms/Radio',
  component: Radio,
  render: Template,
  args: {
    value: 'option',
    label: 'Radio',
    name: 'test-radio',
    checked: false,
    disabled: false,
    invalid: false,
    size: 'md',
    variant: 'fontRegular',
  },
  argTypes: {
    size: { options: ['base', 'md'], control: 'select' },
    variant: { options: ['fontRegular', 'fontBold'], control: 'select' },
    onChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { name: 'Radio (single)' };
export const SizeBase: Story = { name: 'Size › base', args: { size: 'base' } };
export const SizeMd: Story = { name: 'Size › md', args: { size: 'md' } };
export const StateDisabled: Story = {
  name: 'State › disabled',
  args: { disabled: true },
};
export const StateInvalid: Story = {
  name: 'State › invalid',
  args: { invalid: true },
};
export const VariantBold: Story = {
  name: 'Variant › fontBold',
  args: { variant: 'fontBold' },
};
