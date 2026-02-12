import React from 'react';

import { render, screen } from 'jest-utils';

import { RangeSliderWithScale } from '../RangeSliderWithScale';
import type { RangeSliderProps } from '../index';

// We mock the CHILD RangeSlider
jest.mock('../index', () => {
  const actual = jest.requireActual('../index');
  return {
    __esModule: true,
    ...actual,
    RangeSlider: (props: RangeSliderProps) => (
      <div>
        <button
          type="button"
          data-testid="emit-change"
          onClick={() => props.onChange?.([2, 3])} // minIndex=2, maxIndex=3
        >
          emit change
        </button>
        <button
          type="button"
          data-testid="emit-change-end"
          onClick={() => props.onChangeEnd?.([2, 3])}
        >
          emit change end
        </button>
      </div>
    ),
  };
});

describe('<RangeSliderWithScale />', () => {
  it('calls onSliderChange with converted min/max when slider emits onChange', async () => {
    const onSliderChange = jest.fn();
    const onSliderRelease = jest.fn();

    render(
      <RangeSliderWithScale
        scale={[0, 1000, 2000, 4000]}
        selection={{ min: 0, max: 4000 }}
        onSliderChange={onSliderChange}
        onSliderRelease={onSliderRelease}
      />,
    );

    screen.getByTestId('emit-change').click();

    expect(onSliderChange).toHaveBeenCalledWith({
      touched: 'min',
      value: { min: 2000, max: 4000 }, // minIndex=2 -> 2000, maxIndex=3 -> 4000
    });
  });

  it('calls onSliderRelease when slider emits onChangeEnd', async () => {
    const onSliderChange = jest.fn();
    const onSliderRelease = jest.fn();

    render(
      <RangeSliderWithScale
        scale={[0, 1000, 2000, 4000]}
        selection={{ min: 0, max: 4000 }}
        onSliderChange={onSliderChange}
        onSliderRelease={onSliderRelease}
      />,
    );

    screen.getByTestId('emit-change-end').click();

    expect(onSliderRelease).toHaveBeenCalled();
  });
});
