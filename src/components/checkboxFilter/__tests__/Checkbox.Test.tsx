import React from 'react';
import { render, screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';

import CheckboxFilter from '../index';

const renderWrapper = ({
  name = 'Filter',
  options = [
    { label: 'New', value: 1 },
    { label: 'Used', value: 2 },
  ],
  applyFilters = jest.fn(),
  facet = { '1': 77, '2': 0 },
  selected = [],
  onSelect = jest.fn(),
} = {}) =>
  render(
    <CheckboxFilter
      name={name}
      options={options}
      apply={applyFilters}
      facet={facet}
      selected={selected}
      onSelect={onSelect}
    />
  );

describe('<CheckBoxFilter />', () => {
  it('renders checkbox filter with facet', () => {
    renderWrapper();

    const checkboxFilter = screen.getByRole('checkbox', { name: 'New 77' });
    expect(checkboxFilter).toBeInTheDocument();
  });

  it('applies filter on click', () => {
    const applyFilters = jest.fn();
    renderWrapper({ applyFilters });
    userEvent.click(screen.getByRole('checkbox', { name: 'New 77' }));

    expect(applyFilters).toHaveBeenCalled();
  });

  it('calls onSelect when the values is selected', () => {
    const onSelect = jest.fn();
    renderWrapper({ onSelect });
    userEvent.click(screen.getByRole('checkbox', { name: 'New 77' }));

    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it('disables checkbox filter with facet zero', () => {
    renderWrapper();

    const checkboxFilter = screen.getByRole('checkbox', { name: 'Used 0' });
    expect(checkboxFilter).toBeDisabled();
  });
});
