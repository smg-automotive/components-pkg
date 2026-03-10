import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { VStack } from '@chakra-ui/react';

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
        const next = !(args.checked ?? false); // toggle
        updateArgs({ checked: next });
        action('onChange')(e);
      }}
    />
  );
};

const TwoRadiosTemplate = (props: Pick<RadioProps, 'size' | 'variant' | 'disabled'>) => {
  const [selected, setSelected] = useState<string | null>('a');

  return (
    <VStack align="stretch" gap="md" width="fit-content">
      <Radio
        {...props}
        name="two-radios"
        value="a"
        label="Option A"
        checked={selected === 'a'}
        onChange={(e) => {
          setSelected(e.target.checked ? e.target.value : null);
          action('onChange')(e);
        }}
      />
      <Radio
        {...props}
        name="two-radios"
        value="b"
        label="Option B"
        checked={selected === 'b'}
        onChange={(e) => {
          setSelected(e.target.checked ? e.target.value : null);
          action('onChange')(e);
        }}
      />
    </VStack>
  );
};

const meta: Meta<typeof Radio> = {
  title: 'Components/Forms/Radio',
  component: Radio,
  render: Template,
  args: {
    value: 'option',
    label: 'Radio',
    name: '',
    checked: false,
    disabled: false,
    invalid: false,
    size: 'md',
    variant: 'fontRegular',
  },
  argTypes: {
    ...getRecipeControls(radioRecipe),
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { name: 'Radio (single)' };

export const TwoOptionsExclusive: Story = {
  name: 'Two options (select one, unselect the other)',
  render: (args) => <TwoRadiosTemplate {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Two radio buttons with shared state: selecting one unselects the other.',
      },
    },
  },
};

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
