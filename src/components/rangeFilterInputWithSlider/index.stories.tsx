import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import Box from '../box';

import RangeFilterInputWithSlider, { Props } from './';

const Template = (props: Props<'priceFrom', 'priceTo'>) => {
  const [args, updateArgs] = useArgs<Props<'priceFrom', 'priceTo'>>();

  return (
    <RangeFilterInputWithSlider
      {...({
        ...props,
        ...args,
      } as Props<'priceFrom', 'priceTo'>)}
      onChange={(event) => {
        if (event.name === 'priceFrom') {
          updateArgs({ from: { ...args.from, value: event.value } });
        }

        if (event.name === 'priceTo') {
          updateArgs({ to: { ...args.to, value: event.value } });
        }
        args.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof RangeFilterInputWithSlider<'priceFrom', 'priceTo'>> = {
  title: 'Components/Filter/Range Filter Input With Slider',
  component: RangeFilterInputWithSlider<'priceFrom', 'priceTo'>,
  decorators: [
    (Story) => (
      <Box maxW={380}>
        <Story />
      </Box>
    ),
  ],
  render: Template.bind({}),

  args: {
    unit: 'CHF',

    from: {
      name: 'priceFrom',
      placeholder: '0',
      value: 100,
    },

    to: {
      name: 'priceTo',
      placeholder: '1000000+',
      value: 10000,
    },

    onChange: action('onChange'),
    onBlur: action('onBlur'),
  },

  argTypes: {
    facets: {
      description:
        'Array of objects with `from`, `to` and `value` keys. Use it to display the chart bars and control the scale of the slider',
    },

    chartHeight: {
      description: 'Use it to control the maximal height of the chart',
      control: 'text',
    },
  },
};
export default meta;

type StoryType = StoryObj<
  typeof RangeFilterInputWithSlider<'priceFrom', 'priceTo'>
>;
export const WithHistograms: StoryType = {
  name: 'With histograms',

  args: {
    facets: [
      {
        from: 0,
        to: 100,
        value: 5,
      },
      {
        from: 100,
        to: 200,
        value: 10,
      },
      {
        from: 200,
        to: 1000,
        value: 40,
      },
      {
        from: 1000,
        to: 2000,
        value: 35,
      },
      {
        from: 2000,
        to: 5000,
        value: 60,
      },
      {
        from: 5000,
        to: 10000,
        value: 20,
      },
      {
        from: 10000,
        to: 30000,
        value: 62,
      },
      {
        from: 30000,
        to: 60000,
        value: 50,
      },
      {
        from: 60000,
        to: 90000,
        value: 70,
      },
      {
        from: 300000,
        to: 500000,
        value: 10,
      },
      {
        from: 1000000,
        value: 0,
      },
      {
        from: 90000,
        to: 200000,
        value: 80,
      },
      {
        from: 200000,
        to: 300000,
        value: 22,
      },
    ],
  },

  argTypes: {
    rangeSliderScale: {
      table: { disable: true },
    },
  },
};

export const WithCustomRangeSliderScale: StoryType = {
  name: 'With custom range slider scale',

  args: {
    rangeSliderScale: [
      0, 100, 200, 1000, 2000, 5000, 10000, 30000, 60000, 300000, 1000000,
      90000, 200000,
    ],
  },

  argTypes: {
    facets: {
      table: {
        disable: true,
      },
    },
    chartHeight: {
      table: {
        disable: true,
      },
    },
  },
};
