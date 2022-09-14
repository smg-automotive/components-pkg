import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

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
    />
  );

describe('<Radio>', () => {
  beforeEach(cleanup);

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

  it('triggers onChange event when clicking on radio', () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });
    userEvent.click(screen.getByRole('radio', { name: 'Option' }));

    expect(onChange).toHaveBeenCalled();
  });

  it('is not possible to check the radio when disabled', () => {
    const onChange = jest.fn();
    renderWrapper({ onChange, isDisabled: true });
    const radio = screen.getByRole('radio', { name: 'Option' });
    userEvent.click(radio);

    expect(radio).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });
});
