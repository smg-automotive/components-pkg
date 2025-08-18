import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import Input, { Props } from '..';

const renderWrapper = ({
  name = 'test-input',
  placeholder = 'placeholder',
  onFocus = jest.fn(),
  onChange = jest.fn(),
  onBlur = jest.fn(),
  debounce = false,
  setInputValue = jest.fn(),
  value = '',
  autoFocus = false,
  icon,
  isClearable,
}: Partial<Props> = {}) =>
  render(
    <Input
      name={name}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      autoFocus={autoFocus}
      icon={icon}
      isClearable={isClearable}
      {...(value || value === '' ? { value } : {})}
      {...(debounce ? { debounce, setInputValue, value } : { onChange })}
    />,
  );

describe('<Input>', () => {
  describe('event handlers', () => {
    describe('onFocus', () => {
      it('is called when focusing the input', () => {
        const onFocus = jest.fn();
        renderWrapper({ placeholder: 'placeholder', onFocus });

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('is called when de-focusing the input', () => {
        const onBlur = jest.fn();
        renderWrapper({ placeholder: 'placeholder', onBlur });

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('is called when the input changes', async () => {
        const onChange = jest.fn();
        renderWrapper({ placeholder: 'placeholder', onChange });

        const input = screen.getByPlaceholderText('placeholder');
        await userEvent.type(input, 'test');

        await waitFor(() => expect(onChange).toHaveBeenCalledTimes(4));
      });
    });

    describe('debouncing', () => {
      it('calls the value setter', async () => {
        const setInputValue = jest.fn();
        const value = '';
        renderWrapper({
          placeholder: 'placeholder',
          setInputValue,
          value,
          debounce: true,
        });
        const input = screen.getByPlaceholderText('placeholder');
        await userEvent.type(input, 'test');

        return waitFor(() => {
          expect(setInputValue).toHaveBeenCalledWith('test');
        });
      });
    });
  });

  it('allows to set value', () => {
    const testValue = 'test value';
    const onChange = jest.fn();
    renderWrapper({ value: testValue, onChange });
    const input = screen.getByDisplayValue(testValue);

    expect(input).toBeInTheDocument();
  });

  it('supports autoFocus', () => {
    renderWrapper({ placeholder: 'placeholder', autoFocus: true });
    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveFocus();
  });

  it('renders the icon component', () => {
    const Icon = () => <div>icon</div>;
    renderWrapper({ icon: Icon });
    const icon = screen.getByText('icon');

    expect(icon).toBeInTheDocument();
  });

  describe('clearable', () => {
    it('clears the input value', async () => {
      renderWrapper({ placeholder: 'placeholder', isClearable: true });
      const input = screen.getByPlaceholderText('placeholder');

      await userEvent.type(input, 'test');
      const clearButton = screen.getByRole('button');
      await userEvent.click(clearButton);

      expect(input).toHaveValue('');
    });

    it('focuses the input after clearing', async () => {
      renderWrapper({ placeholder: 'placeholder', isClearable: true });
      const input = screen.getByPlaceholderText('placeholder');

      await userEvent.type(input, 'test');
      const clearButton = screen.getByRole('button');
      await userEvent.click(clearButton);

      expect(input).toHaveFocus();
    });

    it('triggers onChange event', async () => {
      const onChange = jest.fn();
      renderWrapper({
        placeholder: 'placeholder',
        isClearable: true,
        onChange,
      });

      const input = screen.getByPlaceholderText('placeholder');

      await userEvent.type(input, 'test');
      const clearButton = screen.getByRole('button');
      await userEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({
            value: '',
          }),
        }),
      );
    });
  });
});
