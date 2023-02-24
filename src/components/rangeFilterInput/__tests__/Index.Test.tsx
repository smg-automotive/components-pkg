/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';

import RangeFilterInput from '../index';

describe('<RangeFilterInput/>', () => {
  const renderInputField = (onChange = jest.fn()) => {
    return render(
      <RangeFilterInput
        handleChange={onChange}
        from={{
          name: 'priceFrom',
          value: 200,
          placeholder: 'From',
        }}
        to={{
          name: 'priceTo',
          value: 1000,
          placeholder: 'To',
        }}
        unit="CHF"
        debounce={false}
      />
    );
  };

  it('triggers onChange with the touched FROM field', async () => {
    const mockOnChange = jest.fn();

    renderInputField(mockOnChange);
    const inputFrom = screen.getByPlaceholderText('From');

    await act(() => userEvent.clear(inputFrom));
    await act(() => userEvent.type(inputFrom, '500'));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: 500,
      name: 'from',
    });
  });

  it('triggers onChange with the touched TO field', async () => {
    const mockOnChange = jest.fn();

    renderInputField(mockOnChange);
    const inputTo = screen.getByPlaceholderText('To');

    await act(() => userEvent.clear(inputTo));
    await act(() => userEvent.type(inputTo, '300'));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: 300,
      name: 'to',
    });
  });

  it('shows the unit', () => {
    renderInputField();
    expect(screen.getAllByText('CHF')).toHaveLength(2);
  });
});
