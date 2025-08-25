import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { PopoverFilterProps } from '../props';
import { PopoverFilter } from '../index';

const validProps: PopoverFilterProps = {
  actionButton: { label: 'Action button', onClick: jest.fn() },
  displayValue: '',
  isApplied: false,
  label: 'Treibstoff',
  language: 'de',
  onResetFilter: jest.fn(),
  children: <div />,
};
describe('<PopoverFilter />', () => {
  it('should open the popover if you click on the button', async () => {
    render(
      <PopoverFilter {...validProps}>
        <div>Popover content</div>
      </PopoverFilter>,
    );

    expect(screen.queryByText('Popover content')).toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('Popover content')).toBeInTheDocument();
  });

  it('should show the reset button if the filter is applied and display value is provided', async () => {
    const mockOnReset = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        displayValue="Automatic"
        isApplied={true}
        onResetFilter={mockOnReset}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Zurücksetzen' }));
    await waitFor(() => expect(mockOnReset).toHaveBeenCalledTimes(1));
  });

  it('should NOT show the reset button if the filter is applied but no display value', async () => {
    const mockOnReset = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        displayValue=""
        isApplied={true}
        onResetFilter={mockOnReset}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );

    expect(
      screen.queryByRole('button', { name: 'Zurücksetzen' }),
    ).not.toBeInTheDocument();
  });

  it('should disable the reset of the filter via reset button if popover is opened', async () => {
    const mockOnReset = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        isApplied={true}
        displayValue="Manual"
        onResetFilter={mockOnReset}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'Treibstoff: Manual' }),
    );

    return waitFor(() =>
      expect(
        screen.getAllByRole('button', { name: 'Zurücksetzen' })[0],
      ).toBeDisabled(),
    );
  });

  it('should show a close button if no filter is applied', async () => {
    render(
      <PopoverFilter {...validProps} isApplied={false}>
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the bottom and on the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(2);
  });

  it('should show no action button', async () => {
    render(
      <PopoverFilter
        {...validProps}
        isApplied={false}
        showCallToActionButton={false}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button on the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(1);
  });

  it('should show the primary action button if a filter is applied', async () => {
    const mockSearchButton = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        isApplied={true}
        actionButton={{ label: 'Search', onClick: mockSearchButton }}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(1);
    await userEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => expect(mockSearchButton).toHaveBeenCalledTimes(1));
  });

  it('should show a custom header', async () => {
    render(
      <PopoverFilter {...validProps} header={<div>custom header</div>}>
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('custom header')).toBeInTheDocument();
  });

  it('should call the callback if the popover opens', async () => {
    const mockOnOpen = jest.fn();
    render(
      <PopoverFilter {...validProps} onPopoverOpen={mockOnOpen}>
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    await waitFor(() => expect(mockOnOpen).toHaveBeenCalledTimes(1));
  });

  it('should call the callback if the popover closes', async () => {
    const mockOnClose = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        onPopoverClose={mockOnClose}
        isApplied={true}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));

    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(1);

    await userEvent.click(
      screen.getAllByRole('button', { name: 'Schliessen' })[0],
    );

    await waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
  });

  it('should set the initial open state', () => {
    render(
      <PopoverFilter {...validProps} initialPopoverState="open">
        <div>Popover content</div>
      </PopoverFilter>,
    );
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('should show the number of applied filters', () => {
    render(
      <PopoverFilter
        {...validProps}
        initialPopoverState="open"
        numberOfAppliedFilters={5}
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should show the label and the value if the filter is applied', () => {
    render(
      <PopoverFilter
        {...validProps}
        isApplied={true}
        displayValue="Benzin, Wasserstoff"
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    expect(
      screen.getByText('Treibstoff: Benzin, Wasserstoff'),
    ).toBeInTheDocument();
  });

  it('should only show the label when there is no display value', () => {
    render(
      <PopoverFilter {...validProps} isApplied={true} displayValue="">
        <div>Popover content</div>
      </PopoverFilter>,
    );
    expect(screen.getByText('Treibstoff')).toBeInTheDocument();
  });

  it('should allow to overwrite the applied label if the real label is for example too long', () => {
    render(
      <PopoverFilter
        {...validProps}
        label="Treibstoff von Agrola"
        appliedLabel="T-Stoff"
        isApplied={true}
        displayValue="Benzin, Wasserstoff"
      >
        <div>Popover content</div>
      </PopoverFilter>,
    );
    expect(
      screen.getByText('T-Stoff: Benzin, Wasserstoff'),
    ).toBeInTheDocument();
  });
});
