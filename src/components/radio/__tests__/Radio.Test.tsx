import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '@/jest-utils';

import { Radio, RadioItemProps } from '..';

const renderWrapper = (
  props: Partial<{
    name: string;
    onChange: jest.Mock;
    label: string;
    items: RadioItemProps[];
    value?: string;
  }> = {},
) => {
  const {
    name = 'Radio',
    onChange = jest.fn(),
    value,
    items = [
      {
        value: 'Option',
        label: 'Option',
      },
    ],
  } = props;

  return render(
    <Radio name={name} value={value} onChange={onChange} items={items} />,
  );
};

describe('<Radio>', () => {
  it('is not checked', async () => {
    renderWrapper();
    const radio = await screen.findByRole('radio', { name: 'Option' });

    expect(radio).not.toBeChecked();
  });

  it('is checked', async () => {
    const user = userEvent.setup();
    renderWrapper();
    const radio = await screen.findByRole('radio', { name: 'Option' });

    await user.click(radio);

    expect(radio).toBeChecked();
  });

  it('triggers onChange event when clicking on radio', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    renderWrapper({ onChange });

    const radio = await screen.findByRole('radio', { name: 'Option' });

    await user.click(radio);

    expect(onChange).toHaveBeenCalled();
  });

  it('is not possible to check the radio when disabled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    renderWrapper({
      onChange,
      items: [{ value: 'Option', label: 'Option', disabled: true }],
    });

    const radio = await screen.findByRole('radio', { name: 'Option' });

    await user.click(radio);

    expect(radio).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });
});
