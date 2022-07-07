import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';

import Input, { InputProps } from '..';

const renderWrapper = ({
  autoFocus = false,
  debounce,
  isDisabled = false,
  onBlur = jest.fn(),
  onFocus = jest.fn(),
  onChange = jest.fn(),
  placeholder = 'placeholder',
  value = undefined,
}: Partial<InputProps> = {}) =>
  render(
    <Input
      autoFocus={autoFocus}
      debounce={debounce}
      isDisabled={isDisabled}
      name="test-input"
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      placeholder={placeholder}
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
        userEvent.type(input, 'test');

        expect(onChange).toHaveBeenCalledTimes(4);
      });

      describe('debouncing', () => {
        it('is possible', () => {
          const onChange = jest.fn();
          renderWrapper({ onChange, debounce: 500 });

          const input = screen.getByPlaceholderText('placeholder');
          userEvent.type(input, 'test');

          return waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
          });
        });

        it('is called before blur handler when the input is blurred', async () => {
          const calls: string[] = [];
          const onChange = jest.fn(() => calls.push('change'));
          const onBlur = jest.fn(() => calls.push('blur'));
          renderWrapper({ onChange, onBlur, debounce: 500 });

          const input = screen.getByPlaceholderText('placeholder');
          userEvent.type(input, 'test');
          input.blur();

          await waitFor(() => {
            expect(onChange).toHaveBeenCalled();
          });
          expect(calls).toEqual(['change', 'blur']);
        });
      });
    });
  });

  it('allows to set value', () => {
    renderWrapper({ value: 'test value' });
    const input = screen.getByDisplayValue('test value');

    expect(input).toBeInTheDocument();
  });

  it('supports autoFocus', () => {
    renderWrapper({ autoFocus: true });
    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveFocus();
  });
});
