import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { RangeSlider } from '../index';

const renderWrapper = ({
  min = 0,
  max = 10,
  defaultValue = [3, 5] as [number, number],
  onChange = jest.fn(),
  onChangeEnd = jest.fn(),
} = {}) =>
  render(
    <RangeSlider
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
    />,
  );

describe('RangeSlider', () => {
  it('renders RangeSlider with two thumbs', async () => {
    renderWrapper();
    const sliders = await screen.findAllByRole('slider', { hidden: true });
    expect(sliders.length).toBe(2);
  });

  it('should move the min thumb with keyboard', async () => {
    const user = userEvent.setup();
    renderWrapper();

    const sliders = screen.getAllByRole('slider', { hidden: true });
    const minThumb = sliders[0];
    minThumb.focus();

    await user.keyboard('{ArrowRight}');
    await waitFor(() => expect(minThumb).toHaveAttribute('aria-valuenow', '4'));
  });
});
