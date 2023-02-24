import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

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
      </PopoverFilter>
    );

    expect(screen.queryByText('Popover content')).toBeNull();
    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('Popover content')).toBeInTheDocument();
  });

  it('should show the reset button if the filter is applied', async () => {
    const mockOnReset = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        isApplied={true}
        onResetFilter={mockOnReset}
      >
        <div>Popover content</div>
      </PopoverFilter>
    );

    userEvent.click(screen.getByRole('button', { name: 'Zurücksetzen' }));
    await waitFor(() => expect(mockOnReset).toHaveBeenCalledTimes(1));
  });

  it('should be possible to reset the filter on the popover', async () => {
    const mockOnReset = jest.fn();
    render(
      <PopoverFilter
        {...validProps}
        isApplied={true}
        onResetFilter={mockOnReset}
      >
        <div>Popover content</div>
      </PopoverFilter>
    );

    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    userEvent.click(screen.getAllByRole('button', { name: 'Zurücksetzen' })[0]);
    await waitFor(() => expect(mockOnReset).toHaveBeenCalledTimes(1));
  });

  it('should show a close button if no filter is applied', async () => {
    render(
      <PopoverFilter {...validProps} isApplied={false}>
        <div>Popover content</div>
      </PopoverFilter>
    );
    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the bottom and on the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' })
    ).toHaveLength(2);
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
      </PopoverFilter>
    );
    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' })
    ).toHaveLength(1);
    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => expect(mockSearchButton).toHaveBeenCalledTimes(1));
  });

  it('should call the callback if the popover opens', async () => {
    const mockOnOpen = jest.fn();
    render(
      <PopoverFilter {...validProps} onPopoverOpen={mockOnOpen}>
        <div>Popover content</div>
      </PopoverFilter>
    );
    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
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
      </PopoverFilter>
    );
    userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));

    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' })
    ).toHaveLength(1);

    userEvent.click(screen.getAllByRole('button', { name: 'Schliessen' })[0]);

    await waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
  });

  it('should set the initial open state', () => {
    render(
      <PopoverFilter {...validProps} initialPopoverState="open">
        <div>Popover content</div>
      </PopoverFilter>
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
      </PopoverFilter>
    );
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
