import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Grid } from '@chakra-ui/react';

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
  parameters: {
    docs: {
      description: {
        component: [
          'Radio renders a Chakra `RadioGroup.Root` plus the radio items.',
          '',
          '### Layout (default vs render prop)',
          '- **Default (no `children`)**: items are wrapped in an internal `Stack` whose direction is controlled by `orientation`.',
          '- **Render prop (`children`)**: pass `children={(renderedItems) => ...}` to provide your own wrapper/layout (for example, `Grid`).',
        ].join('\n'),
      },
    },
  },
  args: {
    value: undefined,
    name: '',
    size: 'md',
    variant: 'fontRegular',
    orientation: 'horizontal',
    items: [
      { value: 'option-1', label: 'Radio 1' },
      { value: 'option-2', label: 'Radio 2' },
      { value: 'option-3', label: 'Radio 3' },
    ],
  },
  argTypes: {
    ...getRecipeControls(radioRecipe),
    children: {
      control: false,
      description:
        'Optional render prop: `(renderedItems) => ReactNode`. If omitted, the component uses the default internal Stack wrapper based on `orientation`.',
      table: {
        type: { summary: '(renderedItems: ReactNode) => ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { name: 'Default (uses internal Stack)' };

export const OrientationHorizontal: Story = {
  name: 'Orientation › horizontal (Stack row)',
  args: { orientation: 'horizontal' },
};

export const OrientationVertical: Story = {
  name: 'Orientation › vertical (Stack column)',
  args: { orientation: 'vertical' },
};

export const CustomWrapperGrid: Story = {
  name: 'Custom wrapper via children (Grid)',
  render: (args) => (
    <Radio {...args}>
      {(renderedItems) => (
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(3, max-content)' }}
          gap={{ base: 'md', sm: 'xl' }}
          alignItems="center"
        >
          {renderedItems}
        </Grid>
      )}
    </Radio>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          'Uses the **render prop** (`children`) to replace the default internal Stack wrapper with a Grid.',
          'Only the layout changes—radio items remain the same.',
        ].join('\n'),
      },
      source: {
        code: `<Grid templateColumns={{ base: '1fr', sm: 'repeat(3, max-content)' }} gap={{ base: 'md', sm: 'xl' }} alignItems="center">
    {renderedItems}
</Grid>`,
        language: 'tsx',
      },
    },
  },
};

export const SizeBase: Story = { name: 'Size › base', args: { size: 'base' } };
export const SizeMd: Story = { name: 'Size › md', args: { size: 'md' } };

export const VariantBold: Story = {
  name: 'Variant › fontBold',
  args: { variant: 'fontBold' },
};

export const StateDisabled: Story = {
  name: 'State › disabled',
  args: {
    items: [
      { value: 'option-1', label: 'Radio 1', disabled: true },
      { value: 'option-2', label: 'Radio 2', disabled: true },
      { value: 'option-3', label: 'Radio 3', disabled: true },
    ],
  },
};

export const StateInvalid: Story = {
  name: 'State › invalid',
  args: {
    items: [
      { value: 'option-1', label: 'Radio 1', invalid: true },
      { value: 'option-2', label: 'Radio 2', invalid: true },
      { value: 'option-3', label: 'Radio 3', invalid: true },
    ],
  },
};
