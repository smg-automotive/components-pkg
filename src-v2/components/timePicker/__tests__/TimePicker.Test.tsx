import React from 'react';

import { fireEvent, render, screen } from 'jest-utils';

import TimePicker, { TimePickerProps } from '..';

const renderWrapper = ({
  onBlur = jest.fn(),
  onFocus = jest.fn(),
  onChange = jest.fn(),
  value = undefined,
}: Partial<TimePickerProps> = {}) =>
  render(
    <TimePicker
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
      data-testid="test-timepicker"
    />,
  );

describe('<TimePicker />', () => {
  it('allows to set value', () => {
    renderWrapper({ value: '17:05' });

    const input = screen.getByDisplayValue('17:05');

    expect(input).toBeInTheDocument();
  });

  describe('event handlers', () => {
    describe('onFocus', () => {
      it('is called when focusing the input', () => {
        const onFocus = jest.fn();
        renderWrapper({ onFocus });

        const input = screen.getByTestId('test-timepicker');
        input.focus();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('is called when de-focusing the input', () => {
        const onBlur = jest.fn();
        renderWrapper({ onBlur });

        const input = screen.getByTestId('test-timepicker');
        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('is called when the input changes', () => {
        const onChange = jest.fn();
        renderWrapper({ onChange });

        const input = screen.getByTestId('test-timepicker');
        fireEvent.change(input, { target: { value: '17:05' } });

        expect(onChange).toHaveBeenCalled();
      });
    });
  });
});
