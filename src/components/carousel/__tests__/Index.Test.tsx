import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Carousel from '../index';

describe('<Carousel />', () => {
  it('should create the carousel in infinite mode', async () => {
    render(
      <Carousel onSlideClick={jest.fn} startIndex={2}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );
    expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await userEvent.click(screen.getByRole('button', { name: 'next slide' }));
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await userEvent.click(
      screen.getByRole('button', { name: 'previous slide' })
    );
    expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('should use start index 0 if none has been given', () => {
    render(
      <Carousel onSlideClick={jest.fn}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('should respect the start index', () => {
    render(
      <Carousel onSlideClick={jest.fn} startIndex={1}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );
    expect(screen.getByLabelText('2 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('should call the onClick handler when clicking a slide', async () => {
    const mockOnClick = jest.fn();
    render(
      <Carousel onSlideClick={mockOnClick}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );
    await userEvent.click(screen.getByText('slide 1'));
    expect(mockOnClick).toHaveBeenCalledWith(0);
  });
});
