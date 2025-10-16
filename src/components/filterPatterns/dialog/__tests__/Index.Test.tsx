import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { DialogFilterProps } from '../props';
import { DialogFilter } from '../index';

const validProps: DialogFilterProps = {
  actionButton: { label: 'Action button', onClick: jest.fn() },
  displayValue: '',
  isApplied: false,
  label: 'Treibstoff',
  language: 'de',
  onResetFilter: jest.fn(),
  children: <div />,
};
describe('<DialogFilter />', () => {
  it('should open the modal if you click on the button', async () => {
    render(
      <DialogFilter {...validProps}>
        <div>Dialog content</div>
      </DialogFilter>,
    );

    expect(screen.queryByText('Dialog content')).toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('Dialog content')).toBeInTheDocument();
  });

  it('should be possible to reset the filter on the modal', async () => {
    const mockOnReset = jest.fn();
    render(
      <DialogFilter
        {...validProps}
        isApplied={true}
        onResetFilter={mockOnReset}
      >
        <div>Dialog content</div>
      </DialogFilter>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    await userEvent.click(
      await screen.findByRole('button', { name: 'Zurücksetzen' }),
    );
    await waitFor(() => expect(mockOnReset).toHaveBeenCalledTimes(1));
  });

  it('should show a close button if no filter is applied', async () => {
    render(
      <DialogFilter {...validProps} isApplied={false}>
        <div>Dialog content</div>
      </DialogFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the bottom and on the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(2);
  });

  it('should show no action button', async () => {
    render(
      <DialogFilter
        {...validProps}
        isApplied={false}
        showCallToActionButton={false}
      >
        <div>Dialog content</div>
      </DialogFilter>,
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
      <DialogFilter
        {...validProps}
        isApplied={true}
        actionButton={{ label: 'Search', onClick: mockSearchButton }}
      >
        <div>Dialog content</div>
      </DialogFilter>,
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
      <DialogFilter {...validProps} header={<div>custom header</div>}>
        <div>Dialog content</div>
      </DialogFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('custom header')).toBeInTheDocument();
  });

  it('should call the callback if the modal opens', async () => {
    const mockOnOpen = jest.fn();
    render(
      <DialogFilter {...validProps} onDialogOpen={mockOnOpen}>
        <div>Dialog content</div>
      </DialogFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    await waitFor(() => expect(mockOnOpen).toHaveBeenCalledTimes(1));
  });

  it('should call the callback if the modal closes', async () => {
    const mockOnClose = jest.fn();
    render(
      <DialogFilter
        {...validProps}
        onDialogClose={mockOnClose}
        isApplied={true}
      >
        <div>Dialog content</div>
      </DialogFilter>,
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
});
