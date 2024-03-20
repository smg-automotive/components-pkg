import { useState } from 'react';

import { Center } from '@chakra-ui/react';

import Box from '../box';

import DiscreteSlider from './index';

const Template = (args) => {
  const marks = [
    { label: '14 days', value: 1 },
    { label: '30 days', value: 2 },
    { label: '60 days', value: 3 },
    { label: 'Unlimited', value: 4 },
  ];
  const [step, setStep] = useState(marks[0].value);
  return (
    <Center>
      <Box width={392}>
        <DiscreteSlider
          {...args}
          marks={marks}
          value={step}
          onValueChanged={setStep}
        />
      </Box>
    </Center>
  );
};

export default {
  title: 'Components/Filter/Discrete Slider',
  component: DiscreteSlider,

  argTypes: {
    marks: {
      control: 'object',
      name: 'marks',
      description:
        'An array of marks of generic type T. Each mark is an object that represents a position on the discreteSlider. It has a label, which is a string representing the visual label on the mark, and an arbitrary value that can be of any type.',
    },

    value: {
      control: 'object',
      name: 'value',
      description:
        "The default value where the discreteSlider's thumb will be upon initialization.",
    },

    onValueChanged: {
      control: 'action',
      name: 'onValueChanged',
      description:
        'A function that is called whenever the discreteSlider value changes. It receives the current discreteSlider value as an argument.',
    },

    applyIndentation: {
      control: 'boolean',
      name: 'applyIndentation',

      table: {
        defaultValue: {
          summary: 'True',
        },
      },

      description:
        'An optional parameter that lets you define whether the first discreteSlider step should be indented or start right at the beginning of the SliderTrack.',
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    applyIndentation: true,
  },
};
