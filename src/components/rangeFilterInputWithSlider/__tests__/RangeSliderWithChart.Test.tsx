import React from 'react';

import type { RangeSliderWithChartProps } from 'src/components/rangeSlider/RangeSliderWithChart';

import { render, screen, waitFor } from 'jest-utils';

import { RangeFilterInputWithSlider } from '..';

jest.mock('src/components/rangeSlider/RangeSliderWithChart', () => ({
  RangeSliderWithChart: (props: RangeSliderWithChartProps) => {
    return (
      <div>
        <button
          type="button"
          data-testid="emit-slider-change"
          onClick={() =>
            props.onSliderChange({
              touched: 'min',
              value: { min: 1000, max: 10000 },
            })
          }
        >
          emit slider change
        </button>
        <button
          type="button"
          data-testid="emit-slider-release"
          onClick={() =>
            props.onSliderRelease({
              touched: 'min',
              value: { min: 1000, max: 10000 },
            })
          }
        >
          emit slider release
        </button>
      </div>
    );
  },
}));

describe('<RangeFilterInputWithSlider /> slider → input', () => {
  it('updates input while sliding (onSliderChange) and calls onChange on release', async () => {
    const mockOnChange = jest.fn();

    render(
      <RangeFilterInputWithSlider
        onChange={mockOnChange}
        from={{ name: 'priceFrom', value: 0, placeholder: '0' }}
        to={{ name: 'priceTo', value: 10000, placeholder: '1000000+' }}
        facets={[
          { from: 0, to: 1000, value: 1 },
          { from: 1000, to: 2000, value: 1 },
        ]}
        unit="CHF"
      />,
    );

    // 1) While slider moves → update input (valuesWhileSliding)
    screen.getByTestId('emit-slider-change').click();

    const inputFrom = screen.getAllByRole('spinbutton')[0] as HTMLInputElement;
    await waitFor(() => expect(inputFrom).toHaveValue('1000'));

    //  On "release" we call onChange(changeType=slider)
    screen.getByTestId('emit-slider-release').click();

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        name: 'priceFrom',
        value: 1000,
        changeType: 'slider',
      });
    });
  });
});
