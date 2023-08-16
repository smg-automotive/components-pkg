import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import Input from '..';

describe('<Input>', () => {
  describe('event handlers', () => {
    describe('onFocus', () => {
      it('is called when focusing the input', () => {
        const onFocus = jest.fn();
        render(
          <Input
            name="test-input"
            placeholder="placeholder"
            onFocus={onFocus}
          />,
        );

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('is called when de-focusing the input', () => {
        const onBlur = jest.fn();
        render(
          <Input name="test-input" placeholder="placeholder" onBlur={onBlur} />,
        );

        const input = screen.getByPlaceholderText('placeholder');
        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('is called when the input changes', async () => {
        const onChange = jest.fn();
        render(
          <Input
            name="test-input"
            placeholder="placeholder"
            onChange={onChange}
          />,
        );

        const input = screen.getByPlaceholderText('placeholder');
        await userEvent.type(input, 'test');

        await waitFor(() => expect(onChange).toHaveBeenCalledTimes(4));
      });
    });

    describe('debouncing', () => {
      it('calls the value setter', async () => {
        const setInputValue = jest.fn();
        const value = '';
        render(
          <Input
            name="test-input"
            value={value}
            placeholder="placeholder"
            setInputValue={setInputValue}
            debounce={true}
          />,
        );
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
    render(<Input name="test-input" value={testValue} onChange={onChange} />);
    const input = screen.getByDisplayValue(testValue);

    expect(input).toBeInTheDocument();
  });

  it('supports autoFocus', () => {
    render(
      <Input name="test-input" placeholder="placeholder" autoFocus={true} />,
    );
    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveFocus();
  });
});
