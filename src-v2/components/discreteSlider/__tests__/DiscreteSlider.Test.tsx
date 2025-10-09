import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import DiscreteSlider from '../index';

const dummyMarks = [
  { label: '14 days', value: 1 },
  { label: '30 days', value: 2 },
  { label: '60 days', value: 3 },
  { label: 'Unlimited', value: 4 },
];

const renderWrapper = ({
  marks = dummyMarks,
  defaultValue = dummyMarks[0],
  useIndentation = true,
  onValueChanged = jest.fn(),
} = {}) =>
  render(
    <DiscreteSlider
      marks={marks}
      value={defaultValue}
      applyIndentation={useIndentation}
      onValueChanged={onValueChanged}
    />,
  );

describe('DiscreteSlider', () => {
  it('renders DiscreteSlider', () => {
    renderWrapper();
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('should move the thumb', async () => {
    renderWrapper();

    const slider = screen.getByRole('slider');
    await userEvent.keyboard('[ArrowRight]');
    await waitFor(() => expect(slider).toHaveAttribute('aria-valuenow', '1'));
  });
});
