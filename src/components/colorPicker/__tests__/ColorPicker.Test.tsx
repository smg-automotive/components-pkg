import React from 'react';

import { fireEvent, render, screen } from 'jest-utils';

import ColorPicker from '..';

const renderWrapper = ({
  onBlur = jest.fn(),
  onFocus = jest.fn(),
  onChange = jest.fn(),
  value = '#FF0000',
}: Partial<React.ComponentProps<typeof ColorPicker>> = {}) =>
  render(
    <ColorPicker
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
      data-testid="test-colorpicker"
    />,
  );

describe('<ColorPicker />', () => {
  it('renders with given color value', () => {
    renderWrapper({ value: '#FF0000' });

    const input = screen.getByTestId('test-colorpicker');
    expect(input).toHaveValue('#ff0000');
  });

  describe('onFocus', () => {
    it('is called when focusing the input', () => {
      const onFocus = jest.fn();
      renderWrapper({ onFocus });

      const input = screen.getByTestId('test-colorpicker');
      input.focus();

      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('onBlur', () => {
    it('is called when de-focusing the input', () => {
      const onBlur = jest.fn();
      renderWrapper({ onBlur });

      const input = screen.getByTestId('test-colorpicker');
      input.focus();
      input.blur();

      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('is called when the input value changes', () => {
      const onChange = jest.fn();
      renderWrapper({ onChange });

      const input = screen.getByTestId('test-colorpicker');
      fireEvent.change(input, { target: { value: '#00FF00' } });

      expect(onChange).toHaveBeenCalled();
    });
  });
});
