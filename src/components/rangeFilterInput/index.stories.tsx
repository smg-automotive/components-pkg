import { action } from '@storybook/addon-actions';

import { Box } from '@chakra-ui/react';

import RangeFilterInput from './index';

const Template = ({ from, to, unit, ...rest }) => {
  return (
    <Box maxW={270}>
      <RangeFilterInput
        from={from}
        to={to}
        handleChange={(event) => {
          action('change')(event);
        }}
        onBlur={(event) => {
          action('onBlur')(event);
        }}
        unit={unit}
        {...rest}
      />
    </Box>
  );
};

export default {
  title: 'Components/Filter/Range Input',
  component: RangeFilterInput,

  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
  },

  parameters: {
    actions: ['change', 'onBlur'],
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    unit: 'CHF',

    from: {
      name: 'priceFrom',
      placeholder: 'From',
    },

    to: {
      name: 'priceTo',
      placeholder: 'To',
    },
  },
};

export const WithInitialValue = {
  render: Template.bind({}),
  name: 'With initial value',

  args: {
    unit: 'CHF',

    from: {
      name: 'priceFrom',
      value: 100,
    },

    to: {
      name: 'priceTo',
      value: 200,
    },
  },
};

export const WithoutUnit = {
  render: Template.bind({}),
  name: 'Without unit',

  args: {
    from: {
      name: 'priceFrom',
      value: 100,
    },

    to: {
      name: 'priceTo',
      value: 200,
    },
  },
};
