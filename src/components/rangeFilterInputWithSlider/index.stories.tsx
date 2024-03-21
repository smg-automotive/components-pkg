import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Box from '../box';

import RangeFilterInputWithSlider from './';

const Template = ({ facets, from, to, unit, ...rest }) => {
  const [filters, setFilters] = useState({
    priceFrom: from.value,
    priceTo: to.value,
  });

  return (
    <Box maxW={380}>
      <RangeFilterInputWithSlider
        onChange={(event) => {
          setFilters({
            ...filters,
            [event.name]: event.value,
          });
          action('change')(event);
        }}
        onBlur={(event) => {
          action('onBlur')(event);
        }}
        facets={facets}
        from={{
          ...from,
          value: filters.priceFrom,
        }}
        to={{
          ...to,
          value: filters.priceTo,
        }}
        unit={unit}
        {...rest}
      />
    </Box>
  );
};

export default {
  title: 'Components/Filter/Range Filter Input With Slider',
  component: RangeFilterInputWithSlider,
};

export const WithHistograms = {
  render: Template.bind({}),
  name: 'With histograms',

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
};

export const WithCustomRangeSliderScale = {
  render: Template.bind({}),
  name: 'With custom range slider scale',

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

    rangeSliderScale: [
      0, 100, 200, 1000, 2000, 5000, 10000, 30000, 60000, 300000, 1000000,
      90000, 200000,
    ],
  },
};
