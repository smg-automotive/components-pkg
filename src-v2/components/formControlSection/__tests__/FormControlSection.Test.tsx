import React from 'react';

import Input from 'src/components/input';

import { render, screen } from 'jest-utils';

import FormControlSection, { FormControlSectionProps } from '..';

const renderWrapper = ({
  id = 'test',
  errorMessage = undefined,
  hint = undefined,
  label = undefined,
  placeholder = 'placeholder',
}: Partial<FormControlSectionProps> & { placeholder?: string } = {}) => {
  render(
    <FormControlSection
      id={id}
      errorMessage={errorMessage}
      hint={hint}
      label={label}
    >
      <Input name={id} placeholder={placeholder} />
    </FormControlSection>,
  );
};

describe('<FormControlSection>', () => {
  describe('id', () => {
    it('is added to the input', () => {
      renderWrapper({ id: 'test-input', placeholder: 'placeholder' });
      const input = screen.getByPlaceholderText('placeholder');

      expect(input).toHaveAttribute('id', 'test-input');
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
