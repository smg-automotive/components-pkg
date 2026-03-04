import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { radioRecipe } from 'src/themes/shared/slotRecipes/radio';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Radio, RadioProps } from './index';

const Template = (props: RadioProps) => {
  const [args, updateArgs] = useArgs<RadioProps>();

  return (
    <Radio
      {...props}
      {...args}
      onChange={(e) => {
        updateArgs({ value: e.target.value });
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
    value: undefined,
    name: '',
    size: 'md',
    variant: 'fontRegular',
    items: [
      {
        value: 'option',
        label: 'Radio 1',
      },
    ],
  },
  argTypes: {
    ...getRecipeControls(radioRecipe),
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { name: 'Radio (single)' };
export const SizeBase: Story = { name: 'Size › base', args: { size: 'base' } };
export const SizeMd: Story = { name: 'Size › md', args: { size: 'md' } };
export const StateDisabled: Story = {
  name: 'State › disabled',
  args: {
    items: [
      {
        value: 'option',
        label: 'Radio',
        disabled: true,
      },
    ],
  },
};
export const StateInvalid: Story = {
  name: 'State › invalid',
  args: {
    items: [
      {
        value: 'option',
        label: 'Radio',
        invalid: true,
      },
    ],
  },
};
export const VariantBold: Story = {
  name: 'Variant › fontBold',
  args: { variant: 'fontBold' },
};
