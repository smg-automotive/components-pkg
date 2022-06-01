import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { expect } from '@storybook/jest';

import Button from '../index';

import fn = jest.fn;

describe('<Button>', () => {
  beforeEach(cleanup);

  test('render button with label', () => {
    render(<Button>Button Label</Button>);
    const button = screen.getByText('Button Label');
    expect(button).toBeInTheDocument();
  });

  test('trigger button onClick event', () => {
    const onClick = fn();
    render(<Button onClick={onClick}>Button Label</Button>);

    fireEvent.click(screen.getByText('Button Label'));

    expect(onClick).toHaveBeenCalled();
  });
});
