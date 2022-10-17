import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@storybook/testing-library';

import Tooltip from '..';

const tooltipLabel = 'This is tooltip label';

const renderWrapper = () =>
  render(
    <Tooltip label={tooltipLabel}>
      <span data-testid="test-tooltip">Hover me</span>
    </Tooltip>
  );

describe('<Tooltip />', () => {
  it('does not show tooltip label', async () => {
    renderWrapper();
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
  });

  it('does show tooltip label on focus in', async () => {
    renderWrapper();
    fireEvent.focusIn(screen.getByTestId('test-tooltip'));
    expect(await screen.findByText(tooltipLabel)).toBeInTheDocument();
  });

  it('does not show tooltip label on focus out', async () => {
    renderWrapper();
    fireEvent.focusOut(screen.getByTestId('test-tooltip'));
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
  });
});
