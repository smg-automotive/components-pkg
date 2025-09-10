import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import Checkbox from '../index';

const renderWrapper = ({
  name = 'Control',
  onChange = jest.fn(),
  label = 'Checkbox label',
  isDisabled = false,
  isChecked = false,
} = {}) =>
  render(
    <Checkbox
      name={name}
      onChange={onChange}
      label={label}
      isDisabled={isDisabled}
      isChecked={isChecked}
    />,
  );

describe('<Checkbox>', () => {
  it('renders checkbox with label', () => {
    renderWrapper();
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });

    expect(checkbox).toBeInTheDocument();
  });

  it('triggers onChange event when clicking on checkbox', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });
    await userEvent.click(
      screen.getByRole('checkbox', { name: 'Checkbox label' }),
    );

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('is not possible to click on the checkbox when is disabled', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange, isDisabled: true });
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });
    await userEvent.click(checkbox);

    await waitFor(() => expect(checkbox).toBeDisabled());
    expect(onChange).not.toHaveBeenCalled();
  });
});
