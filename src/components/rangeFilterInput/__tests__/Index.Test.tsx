import React from 'react';
import userEvent from '@testing-library/user-event';

import { act, render, screen } from 'jest-utils';

import RangeFilterInput from '../index';

jest.mock('use-debounce', () => {
  return {
    useDebouncedCallback: jest.fn().mockImplementation((func) => {
      return func;
    }),
  };
});

describe('<RangeFilterInput/>', () => {
  const renderInputField = (onChange = jest.fn()) => {
    return render(
      <RangeFilterInput
        handleChange={onChange}
        from={{
          name: 'priceFrom',
          value: undefined,
          placeholder: 'From',
        }}
        to={{
          name: 'priceTo',
          value: undefined,
          placeholder: 'To',
        }}
        unit="CHF"
      />,
    );
  };

  it('triggers onChange with the touched FROM field', async () => {
    const mockOnChange = jest.fn();

    renderInputField(mockOnChange);
    const inputFrom = screen.getByPlaceholderText('From');

    await act(() => userEvent.type(inputFrom, '500'));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: 500,
      name: 'priceFrom',
    });
  });

  it('triggers onChange with the touched TO field', async () => {
    const mockOnChange = jest.fn();

    renderInputField(mockOnChange);
    const inputTo = screen.getByPlaceholderText('To');

    await act(() => userEvent.type(inputTo, '300'));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: 300,
      name: 'priceTo',
    });
  });

  it('shows the unit', () => {
    renderInputField();
    expect(screen.getAllByText('CHF')).toHaveLength(2);
  });

  it('should allow to reset the field', async () => {
    const mockOnChange = jest.fn();

    renderInputField(mockOnChange);
    const inputFrom = screen.getByPlaceholderText('From');
    await act(() => userEvent.type(inputFrom, '5'));
    await act(() => userEvent.clear(inputFrom));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: undefined,
      name: 'priceFrom',
    });
  });
});
