import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { Radio } from '..';

const renderWrapper = (
  props: Partial<{
    name: string;
    onChange: jest.Mock;
    label: string;
    value: string;
    isDisabled: boolean;
    isChecked: boolean;
  }> = {},
) => {
  const {
    name = 'Radio',
    onChange = jest.fn(),
    label = 'Option',
    value = 'Option',
    isDisabled = false,
    isChecked = false,
  } = props;

  return render(
    <Radio
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      disabled={isDisabled}
      checked={isChecked}
    />,
  );
};

describe('<Radio>', () => {
  it('is not checked', async () => {
    renderWrapper();
    const radio = await screen.findByRole('radio', { name: 'Option' });
    await waitFor(() => expect(radio).not.toBeChecked());
  });

  it('is checked', async () => {
    renderWrapper({ isChecked: true });
    const radio = await screen.findByRole('radio', { name: 'Option' });
    await waitFor(() => expect(radio).toBeChecked());
  });

  it('triggers onChange event when clicking on radio', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    renderWrapper({ onChange });
    const radio = await screen.findByRole('radio', { name: 'Option' });

    await user.click(radio);
    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('is not possible to check the radio when disabled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    renderWrapper({ onChange, isDisabled: true });
    const radio = await screen.findByRole('radio', { name: 'Option' });

    await user.click(radio);
    await waitFor(() => expect(radio).toBeDisabled());
    expect(onChange).not.toHaveBeenCalled();
  });
});
