import React from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

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
  beforeEach(cleanup);

  it('renders checkbox with label', () => {
    renderWrapper();
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });

    expect(checkbox).toBeInTheDocument();
  });

  it('triggers onChange event when clicking on checkbox', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });
    userEvent.click(screen.getByRole('checkbox', { name: 'Checkbox label' }));

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('is not possible to click on the checkbox when is disabled', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange, isDisabled: true });
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });
    userEvent.click(checkbox);

    await waitFor(() => expect(checkbox).toBeDisabled());
    expect(onChange).not.toHaveBeenCalled();
  });
});
