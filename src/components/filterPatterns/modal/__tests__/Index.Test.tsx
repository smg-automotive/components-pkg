import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { ModalFilterProps } from '../props';
import { ModalFilter } from '../index';

const validProps: ModalFilterProps = {
  actionButton: { label: 'Action button', onClick: jest.fn() },
  displayValue: '',
  isApplied: false,
  label: 'Treibstoff',
  language: 'de',
  onResetFilter: jest.fn(),
  children: <div />,
};
describe('<ModalFilter />', () => {
  it('should open the modal if you click on the button', async () => {
    render(
      <ModalFilter {...validProps}>
        <div>Modal content</div>
      </ModalFilter>,
    );

    expect(screen.queryByText('Modal content')).toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('Modal content')).toBeInTheDocument();
  });

  it('should be possible to reset the filter on the modal', async () => {
    const mockOnReset = jest.fn();
    render(
      <ModalFilter {...validProps} isApplied={true} onResetFilter={mockOnReset}>
        <div>Modal content</div>
      </ModalFilter>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    await userEvent.click(
      await screen.findByRole('button', { name: 'Zurücksetzen' }),
    );
    await waitFor(() => expect(mockOnReset).toHaveBeenCalledTimes(1));
  });

  it('should show a close button if no filter is applied', async () => {
    render(
      <ModalFilter {...validProps} isApplied={false}>
        <div>Modal content</div>
      </ModalFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    // close button at the bottom and on the top right
    expect(
      await screen.findAllByRole('button', { name: 'Schliessen' }),
    ).toHaveLength(2);
  });

  it('should show no action button', async () => {
    render(
      <ModalFilter
        {...validProps}
        isApplied={false}
        showCallToActionButton={false}
      >
        <div>Modal content</div>
      </ModalFilter>,
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
      <ModalFilter
        {...validProps}
        isApplied={true}
        actionButton={{ label: 'Search', onClick: mockSearchButton }}
      >
        <div>Modal content</div>
      </ModalFilter>,
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
      <ModalFilter {...validProps} header={<div>custom header</div>}>
        <div>Modal content</div>
      </ModalFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    expect(await screen.findByText('custom header')).toBeInTheDocument();
  });

  it('should call the callback if the modal opens', async () => {
    const mockOnOpen = jest.fn();
    render(
      <ModalFilter {...validProps} onModalOpen={mockOnOpen}>
        <div>Modal content</div>
      </ModalFilter>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Treibstoff' }));
    await waitFor(() => expect(mockOnOpen).toHaveBeenCalledTimes(1));
  });

  it('should call the callback if the modal closes', async () => {
    const mockOnClose = jest.fn();
    render(
      <ModalFilter {...validProps} onModalClose={mockOnClose} isApplied={true}>
        <div>Modal content</div>
      </ModalFilter>,
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
