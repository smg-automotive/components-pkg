import React from 'react';
import userEvent from '@testing-library/user-event';

import Input from 'src/components/input';

import { render, screen, waitFor } from 'jest-utils';

import FormControl, { FormControlProps } from '..';

const renderWrapper = ({
  id = 'test',
  isDisabled = false,
  isRequired = false,
  errorMessage = undefined,
  hint = undefined,
  label = undefined,
  placeholder = 'placeholder',
}: Partial<FormControlProps> & { placeholder?: string } = {}) => {
  render(
    <FormControl
      id={id}
      isDisabled={isDisabled}
      isRequired={isRequired}
      errorMessage={errorMessage}
      hint={hint}
      label={label}
    >
      <Input name={id} placeholder={placeholder} />
    </FormControl>,
  );
};

describe('<FormControl>', () => {
  describe('id', () => {
    it('is added to the input', () => {
      renderWrapper({ id: 'test-input', placeholder: 'placeholder' });
      const input = screen.getByPlaceholderText('placeholder');

      expect(input).toHaveAttribute('id', 'test-input');
    });
  });

  describe('label', () => {
    it('is connected with input', async () => {
      renderWrapper({ label: 'Label' });
      const label = screen.getByText('Label');
      await userEvent.click(label);
      const input = screen.getByLabelText('Label');

      await waitFor(() => expect(input).toHaveFocus());
    });
  });

  describe('isDisabled', () => {
    it('sets input to disabled', () => {
      renderWrapper({ isDisabled: true, placeholder: 'placeholder' });
      const input = screen.getByPlaceholderText('placeholder');

      expect(input).toBeDisabled();
    });
  });

  describe('isRequired', () => {
    it('sets input to required', () => {
      renderWrapper({ isRequired: true, placeholder: 'placeholder' });
      const input = screen.getByPlaceholderText('placeholder');

      expect(input).toBeRequired();
    });

    it('adds required indicator if there is a label', () => {
      renderWrapper({ label: 'Label', isRequired: true });
      const label = screen.getByText('*', { exact: false });

      expect(label).toBeInTheDocument();
    });

    it("doesn't add require indicator if there is no label", () => {
      renderWrapper({ label: 'Label', isRequired: true });
      const label = screen.getByText('*', { exact: false });

      expect(label).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('hint', () => {
    it('shows the hint text', () => {
      renderWrapper({ hint: 'I am hint' });
      const label = screen.getByText('I am hint');

      expect(label).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('sets the input to invalid', () => {
      renderWrapper({ errorMessage: 'I am error', placeholder: 'placeholder' });
      const input = screen.getByPlaceholderText('placeholder');

      expect(input).toBeInvalid();
    });

    it('shows the error message', () => {
      renderWrapper({ errorMessage: 'I am error' });
      const errorMessage = screen.getByText('I am error');

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
