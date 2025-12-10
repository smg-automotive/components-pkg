import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import RangeFilterInputWithSlider from '../';

jest.mock('use-debounce', () => {
  return {
    useDebouncedCallback: jest.fn().mockImplementation((func) => {
      return func;
    }),
  };
});

const mockedFacets = [
  {
    from: 0,
    to: 1000,
    value: 500,
  },
  {
    from: 1000,
    to: 2000,
    value: 50,
  },
  {
    from: 2000,
    to: 4000,
    value: 20,
  },
  {
    from: 4000,
    value: 10,
  },
];

const mockedFilters = {
  priceFrom: 0,
  priceTo: 10000,
};

const mockedFrom = {
  name: 'priceFrom',
  value: mockedFilters.priceFrom,
  placeholder: '0',
};

const mockedTo = {
  name: 'priceTo',
  value: mockedFilters.priceTo,
  placeholder: '1000000+',
};

const renderWrapper = ({ onChange = jest.fn(), facets = mockedFacets }) => {
  return render(
    <RangeFilterInputWithSlider
      onChange={onChange}
      from={mockedFrom}
      to={mockedTo}
      facets={facets}
      unit="CHF"
    />,
  );
};

describe('<RangeFilterInputWithSlider/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('with input field', () => {
    it('should trigger onChange with the touched FROM field', async () => {
      const user = userEvent.setup();
      const mockOnChange = jest.fn();

      renderWrapper({
        onChange: mockOnChange,
      });

      const inputFrom = screen.getAllByRole('spinbutton')[0];

      await user.clear(inputFrom);

      await user.type(inputFrom, '500');

      return waitFor(() =>
        expect(mockOnChange).toHaveBeenCalledWith({
          value: 500,
          name: 'priceFrom',
          changeType: 'inputfield',
        }),
      );
    });

    it('should trigger onChange with the touched TO field', async () => {
      const user = userEvent.setup();
      const mockOnChange = jest.fn();

      renderWrapper({
        onChange: mockOnChange,
      });

      const inputTo = screen.getAllByRole('spinbutton')[1];

      await user.clear(inputTo);

      await user.type(inputTo, '300');

      return waitFor(() =>
        expect(mockOnChange).toHaveBeenCalledWith({
          value: 300,
          name: 'priceTo',
          changeType: 'inputfield',
        }),
      );
    });

    it('should change slider range when the input field changes', async () => {
      const user = userEvent.setup();
      const mockOnChange = jest.fn();

      renderWrapper({
        onChange: mockOnChange,
      });

      const inputTo = screen.getAllByRole('spinbutton')[0];

      await user.clear(inputTo);

      await user.type(inputTo, '1600');

      return waitFor(() => {
        const sliderTo = screen.getAllByRole('slider')[0];

        expect(sliderTo).toHaveAttribute('aria-valuenow', '2');
      });
    });

    it('should display the unit', () => {
      renderWrapper({});

      expect(screen.getAllByText('CHF')).toHaveLength(2);
    });
  });

  describe('with slider', () => {
    it('should display a marker for the min and the max value', () => {
      const mockOnChange = jest.fn();

      renderWrapper({
        onChange: mockOnChange,
      });

      const sliders = screen.getAllByRole('slider');

      expect(sliders).toHaveLength(2);

      const [minMarker, maxMarker] = sliders;

      expect(minMarker).toHaveAttribute('aria-valuenow', '0');
      expect(maxMarker).toHaveAttribute('aria-valuenow', '3');
    });

    it('should trigger onChange when the FROM thumb moves', async () => {
      const mockOnChange = jest.fn();
      renderWrapper({
        onChange: mockOnChange,
      });

      const fromSlider = screen.getAllByRole('slider')[0];
      await userEvent.type(fromSlider, '{arrowup}');

      return waitFor(
        () => {
          expect(mockOnChange).toHaveBeenCalledWith({
            name: 'priceFrom',
            value: 1000,
            changeType: 'slider',
          });
        },
        { timeout: 1500 },
      );
    });

    it('should not trigger onChange if the value did not change', async () => {
      const mockOnChange = jest.fn();

      renderWrapper({
        onChange: mockOnChange,
      });

      const fromSlider = screen.getAllByRole('slider')[0];
      const toSlider = screen.getAllByRole('slider')[1];
      await userEvent.click(fromSlider);
      await userEvent.click(toSlider);

      return waitFor(() => expect(mockOnChange).not.toHaveBeenCalled());
    });

    it('should update input field with value set by slider', async () => {
      const mockOnChange = jest.fn();
      renderWrapper({
        onChange: mockOnChange,
      });

      const fromSlider = screen.getAllByRole('slider')[0];
      await userEvent.type(fromSlider, '{arrowup}');

      return waitFor(
        () => {
          const inputFrom = screen.getAllByRole('spinbutton')[0];
          expect(inputFrom).toHaveValue('1000');
        },
        { timeout: 1500 },
      );
    });

    it('should display facets in chart sorted by FROM (lower to higher) facet key', () => {
      const mockedUnsortedFacets = [
        {
          from: 2000,
          to: 4000,
          value: 20,
        },
        {
          from: 4000,
          value: 10,
        },
        {
          from: 0,
          to: 1000,
          value: 500,
        },
        {
          from: 1000,
          to: 2000,
          value: 50,
        },
      ];

      renderWrapper({
        facets: mockedUnsortedFacets,
      });

      const chart = screen.getByTestId('chart');

      expect(chart.firstChild).toHaveStyle({ transform: 'scaleY(1)' });
      expect(chart.lastChild).toHaveStyle({ transform: 'scaleY(0.02)' });
    });
  });
});
