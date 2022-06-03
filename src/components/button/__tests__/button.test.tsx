import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Button from '../index';

describe('<Button>', () => {
  beforeEach(cleanup);

  it('should render button with label', () => {
    render(<Button onClick={() => undefined}>Button Label</Button>);
    const button = screen.getByRole('button', { name: 'Button Label' });
    expect(button).toBeInTheDocument();
  });

  it('should trigger onClick event when clicking on button', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button Label</Button>);

    userEvent.click(screen.getByRole('button', { name: 'Button Label' }));

    expect(onClick).toHaveBeenCalled();
  });

  it('should add disabled attr when isDisabled was passed to component', () => {
    render(
      <Button onClick={() => undefined} isDisabled={true}>
        Button Label
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Button Label' });

    expect(button).toHaveAttribute('disabled');
  });
});
