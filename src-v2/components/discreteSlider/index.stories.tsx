import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Center } from '@chakra-ui/react';

import Box from '../box';

import DiscreteSlider, { type DiscreteSliderProps } from './index';

const Template = (props: DiscreteSliderProps<number>) => {
  const [args, updateArgs] = useArgs<DiscreteSliderProps<number>>();

  return (
    <DiscreteSlider
      {...{
        ...props,
        ...args,
      }}
      value={args.value || args.marks[0].value}
      onValueChanged={(v) => {
        args.onValueChanged?.(v);
        updateArgs({ value: v });
      }}
    />
  );
};

const meta: Meta<typeof DiscreteSlider<number>> = {
  title: 'Components/Filter/Discrete Slider',
  component: DiscreteSlider<number>,
  render: Template.bind({}),

  decorators: [
    (Story) => (
      <Center>
        <Box w="100%" maxW={392}>
          <Story />
        </Box>
      </Center>
    ),
  ],

  args: {
    marks: [
      { label: '14 days', value: 1 },
      { label: '30 days', value: 2 },
      { label: '60 days', value: 3 },
      { label: 'Unlimited', value: 4 },
    ],
    onValueChanged: action('onValueChanged'),
    applyIndentation: true,
    value: 1,
  },

  parameters: {
    docs: {
      description: {
        component:
          'DiscreteSlider is a custom component built utilizing the Chakra UI Slider component. This slider allows for discreet selections represented by marks, that reflect stepped values. This can be useful in scenarios where you want to offer a small selection of options on a slider for a user to pick from.',
      },
    },
  },

  argTypes: {
    marks: {
      control: 'object',
      description:
        'An array of marks of generic type T. Each mark is an object that represents a position on the discreteSlider. It has a label, which is a string representing the visual label on the mark, and an arbitrary value that can be of any type.',
    },

    value: {
      control: {
        type: 'number',
        min: 1,
        max: 4,
      },
      description:
        "The default value where the discreteSlider's thumb will be upon initialization.",
    },

    onValueChanged: {
      description:
        'A function that is called whenever the discreteSlider value changes. It receives the current discreteSlider value as an argument.',
    },

    applyIndentation: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },

      description:
        'An optional parameter that lets you define whether the first discreteSlider step should be indented or start right at the beginning of the SliderTrack.',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof DiscreteSlider<number>> = {};
