import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import Textarea from '../index';

const renderWrapper = ({
  name = 'Textarea',
  autoFocus = false,
  isDisabled = false,
  onChange = jest.fn(),
  onFocus = jest.fn(),
  onBlur = jest.fn(),
  placeholder = 'Placeholder',
} = {}) =>
  render(
    <Textarea
      name={name}
      autoFocus={autoFocus}
      isDisabled={isDisabled}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );

describe('<Textarea>', () => {
  it('onFocus is called when focusing the textarea', () => {
    const onFocus = jest.fn();
    renderWrapper({ onFocus });

    const textarea = screen.getByPlaceholderText('Placeholder');
    textarea.focus();

    expect(onFocus).toHaveBeenCalled();
  });

  it('onBlur is called when the textarea loses focus', () => {
    const onBlur = jest.fn();
    renderWrapper({ onBlur });

    const textarea = screen.getByPlaceholderText('Placeholder');
    textarea.focus();
    textarea.blur();

    expect(onBlur).toHaveBeenCalled();
  });

  it('triggers onChange event when the textarea changes', () => {
    const onChange = jest.fn();
    renderWrapper({ onChange });

    const textarea = screen.getByPlaceholderText('Placeholder');
    userEvent.type(textarea, 'test...');

    expect(onChange).toHaveBeenCalledTimes(7);
  });

  it('supports autoFocus', () => {
    renderWrapper({ autoFocus: true });
    const textarea = screen.getByPlaceholderText('Placeholder');

    expect(textarea).toHaveFocus();
  });

  it('is not possible to click on the textarea when is disabled', () => {
    const onFocus = jest.fn();
    renderWrapper({ onFocus, isDisabled: true });
    const textarea = screen.getByPlaceholderText('Placeholder');
    userEvent.click(textarea);

    expect(textarea).toBeDisabled();
    expect(onFocus).not.toHaveBeenCalled();
  });
});
