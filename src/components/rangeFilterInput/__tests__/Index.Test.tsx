import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import RangeFilterInput from '../index';

describe('<RangeFilterInput/>', () => {
  const mockOnChange = jest.fn();

  const renderInputField = () => {
    return render(
      <RangeFilterInput
        handleChange={mockOnChange}
        name={{
          from: 'priceFrom',
          to: 'priceTo',
        }}
        unit="CHF"
        value={{
          from: 400,
          to: 1000,
        }}
        placeholder={{
          from: 'From',
          to: 'To',
        }}
      />
    );
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('triggers onChange with the touched FROM field', async () => {
    renderInputField();
    const inputFrom = screen.getByPlaceholderText('From');

    userEvent.clear(inputFrom);
    userEvent.type(inputFrom, '500');
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        touched: 'from',
        value: { from: '500', to: 1000 },
      });
    });
  });

  it('triggers onChange with the touched TO field', () => {
    renderInputField();
    const inputTo = screen.getByPlaceholderText('To');

    userEvent.clear(inputTo);
    userEvent.type(inputTo, '300');
    return waitFor(
      () => {
        expect(mockOnChange).toHaveBeenCalledWith({
          touched: 'to',
          value: { from: 400, to: '300' },
        });
      },
      { timeout: 1500 }
    );
  });

  it('shows the unit', () => {
    renderInputField();
    expect(screen.getAllByText('CHF')).toHaveLength(2);
  });
});
