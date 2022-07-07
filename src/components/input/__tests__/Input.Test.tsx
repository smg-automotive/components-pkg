import React from 'react';
import { render, screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';

import Input, { InputProps } from '..';

const renderWrapper = ({
  placeholder = 'placeholder',
  isDisabled = false,
  onBlur = jest.fn(),
  onFocus = jest.fn(),
  onChange = jest.fn(),
  value = undefined,
}: Partial<InputProps> = {}) =>
  render(
    <Input
      placeholder={placeholder}
      isDisabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
    />
  );

describe('<Input>', () => {
  describe('event handlers', () => {
    describe('onFocus', () => {
      it('is called when focusing the input', () => {
        const onFocus = jest.fn();
        renderWrapper({ onFocus });

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('is called when de-focusing the input', () => {
        const onBlur = jest.fn();
        renderWrapper({ onBlur });

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('is called when the input changes', () => {
        const onChange = jest.fn();
        renderWrapper({ onChange });

        const input = screen.getByPlaceholderText('placeholder');
        userEvent.type(input, 'hello world');

        expect(onChange).toHaveBeenCalled();
      });
    });
  });

  it('allows to set value', () => {
    renderWrapper({ value: 'test value' });
    const input = screen.getByDisplayValue('test value');

    expect(input).toBeInTheDocument();
  });
});
