import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    />
  );

describe('<Checkbox>', () => {
  beforeEach(cleanup);

  it('renders checkbox with label', () => {
    renderWrapper();
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });

    expect(checkbox).toBeInTheDocument();
  });

  it('triggers onChange event when clicking on checkbox', () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });
    userEvent.click(screen.getByRole('checkbox', { name: 'Checkbox label' }));

    expect(onChange).toHaveBeenCalled();
  });

  it('is not possible to click on the checkbox when is disabled', () => {
    const onChange = jest.fn();
    renderWrapper({ onChange, isDisabled: true });
    const checkbox = screen.getByRole('checkbox', { name: 'Checkbox label' });
    userEvent.click(checkbox);

    expect(checkbox).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });
});
