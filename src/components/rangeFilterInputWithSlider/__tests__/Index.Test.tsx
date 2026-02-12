import React from 'react';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

import { render, screen, waitFor } from 'jest-utils';

import { RangeFilterInputWithSlider } from '..';

// Input changes are debounced
jest.useFakeTimers();

const mockedFacets = [
  { from: 0, to: 1000, value: 500 },
  { from: 1000, to: 2000, value: 50 },
  { from: 2000, to: 4000, value: 20 },
  { from: 4000, value: 10 },
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

const renderWrapper = ({
  onChange = jest.fn(),
  facets = mockedFacets,
}: {
  onChange?: jest.Mock;
  facets?: typeof mockedFacets;
}) =>
  render(
    <RangeFilterInputWithSlider
      onChange={onChange}
      from={mockedFrom}
      to={mockedTo}
      facets={facets}
      unit="CHF"
    />,
  );

describe('<RangeFilterInputWithSlider />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should trigger onChange with the touched FROM field', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const mockOnChange = jest.fn();

    renderWrapper({ onChange: mockOnChange });

    const inputFrom = screen.getAllByRole('spinbutton')[0];

    await user.clear(inputFrom);
    await user.type(inputFrom, '500');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenLastCalledWith({
        name: 'priceFrom',
        value: 500,
        changeType: 'inputfield',
      });
    });
  });

  it('should trigger onChange with the touched TO field', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const mockOnChange = jest.fn();

    renderWrapper({ onChange: mockOnChange });

    const inputTo = screen.getAllByRole('spinbutton')[1];

    await user.clear(inputTo);
    await user.type(inputTo, '300');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenLastCalledWith({
        name: 'priceTo',
        value: 300,
        changeType: 'inputfield',
      });
    });
  });

  it('should change slider range when the input field changes', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    renderWrapper({});

    const inputFrom = screen.getAllByRole('spinbutton')[0];

    await user.clear(inputFrom);
    await user.type(inputFrom, '1600');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const fromThumb = screen.getAllByRole('slider', { hidden: true })[0];
      expect(fromThumb).toHaveAttribute('aria-valuenow', '2'); // ~1600 → 2000
    });
  });

  it('should display the unit', () => {
    renderWrapper({});
    expect(screen.getAllByText('CHF')).toHaveLength(2);
  });

  it('should display a marker for the min and the max value', () => {
    renderWrapper({});

    const sliders = screen.getAllByRole('slider', { hidden: true });
    expect(sliders).toHaveLength(2);

    const [minMarker, maxMarker] = sliders;

    expect(minMarker).toHaveAttribute('aria-valuenow', '0');
    expect(maxMarker).toHaveAttribute('aria-valuenow', '3');
  });

  it('should display facets in chart sorted by FROM', () => {
    const mockedUnsortedFacets = [
      { from: 2000, to: 4000, value: 20 },
      { from: 4000, value: 10 },
      { from: 0, to: 1000, value: 500 },
      { from: 1000, to: 2000, value: 50 },
    ];

    renderWrapper({ facets: mockedUnsortedFacets });

    const chart = screen.getByTestId('chart');

    expect(chart.firstChild).toHaveStyle({ transform: 'scaleY(1)' });
    expect(chart.lastChild).toHaveStyle({ transform: 'scaleY(0.02)' });
  });
});
