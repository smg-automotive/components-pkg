import React from 'react';
import { render, screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';

import CheckboxFilter from '../index';

const renderWrapper = ({
  name = 'condition-filter',
  options = [
    { label: 'New', key: 'new' },
    { label: 'Used', key: 'used' },
  ],
  onApply = jest.fn(),
  facet = { new: 77, used: 0 },
  checked = { new: false, used: false },
} = {}) =>
  render(
    <CheckboxFilter
      name={name}
      items={options}
      onApply={onApply}
      facets={facet}
      checked={checked}
    />
  );

describe('<CheckBoxFilter />', () => {
  it('should render a checkbox for each option', () => {
    renderWrapper();

    expect(screen.getByRole('checkbox', { name: /New/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Used/ })).toBeInTheDocument();
  });

  it('should call onApply', async () => {
    const onApply = jest.fn();
    renderWrapper({ onApply });
    await userEvent.click(screen.getByRole('checkbox', { name: /New/ }));

    expect(onApply).toHaveBeenCalledWith(
      { value: 'new', isChecked: true },
      { new: true, used: false }
    );
  });

  it('disables checkbox filter with facet zero', () => {
    renderWrapper({ facet: { used: 0, new: 10 } });

    const checkboxFilter = screen.getByRole('checkbox', { name: /Used/ });
    expect(checkboxFilter).toBeDisabled();
  });
});
