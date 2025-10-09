import React from 'react';

import { fireEvent, render, screen } from 'jest-utils';

import DatePicker, { DatePickerProps } from '..';

const renderWrapper = ({
  onBlur = jest.fn(),
  onFocus = jest.fn(),
  onChange = jest.fn(),
  value = undefined,
  min = undefined,
}: Partial<DatePickerProps> = {}) =>
  render(
    <DatePicker
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
      min={min}
      data-testid="test-datepicker"
    />,
  );

describe('<DatePicker />', () => {
  describe('event handlers', () => {
    describe('onFocus', () => {
      it('is called when focusing the input', () => {
        const onFocus = jest.fn();
        renderWrapper({ onFocus });

        const input = screen.getByTestId('test-datepicker');
        input.focus();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('is called when de-focusing the input', () => {
        const onBlur = jest.fn();
        renderWrapper({ onBlur });

        const input = screen.getByTestId('test-datepicker');
        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('is called when the input changes', () => {
        const onChange = jest.fn();
        renderWrapper({ onChange });

        const input = screen.getByTestId('test-datepicker');
        fireEvent.change(input, { target: { value: '2022-10-29' } });

        expect(onChange).toHaveBeenCalled();
      });
    });
  });

  it('allows to set value', () => {
    renderWrapper({ value: '2022-10-29' });

    const input = screen.getByDisplayValue('2022-10-29');

    expect(input).toBeInTheDocument();
  });

  it('is invalid when min is defined and selected value is in the past', () => {
    const today = new Date();
    const todayCopy = new Date(today.getTime());
    const pastDay = new Date(todayCopy.setDate(todayCopy.getDate() - 1));
    const pastDayValue = pastDay.toISOString().split('T')[0];
    renderWrapper({ min: today, value: pastDayValue });

    const input = screen.getByDisplayValue(pastDayValue);

    expect(input).toBeInvalid();
  });

  it('is valid when value is equal or higher then min date', () => {
    const today = new Date();
    const todayCopy = new Date(today.getTime());
    const futureDay = new Date(todayCopy.setDate(todayCopy.getDate() + 2));
    const futureDayValue = futureDay.toISOString().split('T')[0];
    renderWrapper({ min: today, value: futureDayValue });

    const input = screen.getByDisplayValue(futureDayValue);

    expect(input).toBeValid();
  });
});
