import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import Button from '../index';

const renderWrapper = ({
  onClick = jest.fn(),
  isDisabled = false,
  label = 'Button Label',
} = {}) =>
  render(
    <Button onClick={onClick} isDisabled={isDisabled}>
      {label}
    </Button>
  );

describe('<Button>', () => {
  it('should render button with label', () => {
    renderWrapper({ label: 'Button Label' });
    const button = screen.getByRole('button', { name: 'Button Label' });
    expect(button).toBeInTheDocument();
  });

  it('should trigger onClick event when clicking on button', () => {
    const onClick = jest.fn();
    renderWrapper({ label: 'Button Label', onClick });

    userEvent.click(screen.getByRole('button', { name: 'Button Label' }));

    expect(onClick).toHaveBeenCalled();
  });

  it('should add disabled attr when isDisabled was passed to component', () => {
    renderWrapper({ label: 'Button Label', isDisabled: true });
    const button = screen.getByRole('button', { name: 'Button Label' });

    expect(button).toHaveAttribute('disabled');
  });
});
