import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Carousel from '../index';

jest.mock('embla-carousel-react', () => {
  const embla = jest.requireActual('embla-carousel-react');

  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __esModule: true,
    default: jest.fn(embla),
  };
});

describe('<Carousel />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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
    await userEvent.hover(screen.getByLabelText('Carousel'));
    await userEvent.click(screen.getByLabelText('next slide'));
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await userEvent.click(screen.getByLabelText('previous slide'));
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

  it('should prerender a fallback slide on the server (emblaRef is undefined) when the start index is different than 0', () => {
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValueOnce([
      undefined,
      undefined,
    ]);

    render(
      <Carousel onSlideClick={jest.fn} startIndex={1}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );

    expect(screen.queryByLabelText('Carousel')).toBeNull();
    expect(screen.getByLabelText('2 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    expect(screen.queryByLabelText('1 of 3')).toBeNull();
    expect(screen.queryByLabelText('3 of 3')).toBeNull();
  });

  it('should prerender the carousel on the server if the start index is 0', () => {
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValueOnce([
      undefined,
      undefined,
    ]);

    render(
      <Carousel onSlideClick={jest.fn} startIndex={0}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>
    );

    expect(screen.getByLabelText('Carousel')).toBeInTheDocument();
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });
});
