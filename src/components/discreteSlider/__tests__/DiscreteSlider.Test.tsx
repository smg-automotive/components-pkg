import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

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
  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => {}),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  it('renders DiscreteSlider', () => {
    renderWrapper();
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('calls onValueChanged when value is changed', async () => {
    const valueToChange = 1;
    const onValueChanged = jest.fn();
    renderWrapper({ onValueChanged });

    const slider = screen.getByRole('slider');
    await userEvent.type(slider, String(valueToChange));

    expect(onValueChanged).toHaveBeenCalledTimes(1);
  });
});
