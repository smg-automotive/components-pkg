import React from 'react';

import { Text } from 'src/components/text';
import { render, screen } from 'jest-utils';

import { Progress } from '../index';

const createLabel = (current: number, max: number) => (
  <>
    <Text as="span" fontWeight="bold">
      {current}
    </Text>{' '}
    of {max} photos added
  </>
);

const renderWrapper = ({ current = 0, max = 10 } = {}) =>
  render(<Progress current={current} max={max} label={createLabel} />);

describe('<Progress>', () => {
  it('renders progress bar', () => {
    renderWrapper();

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders label', () => {
    renderWrapper({ current: 5, max: 10 });

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText(/of 10 photos added/)).toBeInTheDocument();
  });

  it('calculates correct progress percentage', () => {
    renderWrapper({ current: 5, max: 10 });

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '5');
  });

  it('shows checkmark icon when progress is complete', () => {
    renderWrapper({ current: 10, max: 10 });

    expect(screen.getByTitle('Checkmark circle icon')).toBeInTheDocument();
  });

  it('does not show checkmark icon when progress is incomplete', () => {
    renderWrapper({ current: 5, max: 10 });

    expect(
      screen.queryByTitle('Checkmark circle icon'),
    ).not.toBeInTheDocument();
  });

  it('handles edge case when current exceeds max', () => {
    renderWrapper({ current: 15, max: 10 });

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '10');
  });

  it('handles edge case when current is negative', () => {
    renderWrapper({ current: -5, max: 10 });

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('handles edge case when max is zero', () => {
    renderWrapper({ current: 0, max: 0 });

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });
});
