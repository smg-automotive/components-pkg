import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import Tooltip from '..';

const tooltipLabel = 'This is tooltip label';

const renderWrapper = () =>
  render(
    <Tooltip label={tooltipLabel}>
      <span data-testid="test-tooltip">Hover me</span>
    </Tooltip>,
  );

describe('<Tooltip />', () => {
  it('does not show tooltip label', () => {
    renderWrapper();
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
  });

  it('shows tooltip label on hover', async () => {
    renderWrapper();
    const user = userEvent.setup();

    await user.hover(screen.getByTestId('test-tooltip'));
    const tooltipLabelElement = await screen.findByText(tooltipLabel);
    expect(tooltipLabelElement).toBeInTheDocument();
  });

  it('does not show tooltip label on unhover', async () => {
    const user = userEvent.setup();
    renderWrapper();
    await user.hover(screen.getByTestId('test-tooltip'));
    await user.unhover(screen.getByTestId('test-tooltip'));
    return waitFor(() =>
      expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument(),
    );
  });
});
