import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import Radio from '../index';

const renderWrapper = ({
  name = 'Radio',
  onChange = jest.fn(),
  label = 'Option',
  value = 'Option',
  isDisabled = false,
  isChecked = false,
} = {}) =>
  render(
    <Radio
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      isDisabled={isDisabled}
      isChecked={isChecked}
    />,
  );

describe('<Radio>', () => {
  it('is not checked', () => {
    renderWrapper();
    const radio = screen.getByRole('radio', { name: 'Option' });
    expect(radio).not.toBeChecked();
  });

  it('is checked', () => {
    renderWrapper({ isChecked: true });
    const radio = screen.getByRole('radio', { name: 'Option' });
    expect(radio).toBeChecked();
  });

  it('triggers onChange event when clicking on radio', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });
    await userEvent.click(screen.getByRole('radio', { name: 'Option' }));

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('is not possible to check the radio when disabled', async () => {
    const onChange = jest.fn();
    renderWrapper({ onChange, isDisabled: true });
    const radio = screen.getByRole('radio', { name: 'Option' });
    await userEvent.click(radio);

    await waitFor(() => expect(radio).toBeDisabled());
    expect(onChange).not.toHaveBeenCalled();
  });
});
