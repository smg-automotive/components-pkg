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
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValue([
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
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValue([
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

  it('should have thumbnails on the fullscreen gallery', () => {
    render(
      <Carousel fullScreen={true}>
        {[
          { slide: <div>slide 1</div>, thumbnail: <div>thumbnail 1</div> },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>
    );
    expect(screen.getByText('thumbnail 1')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 2')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 3')).toBeInTheDocument();
    expect(screen.getByLabelText('thumbnail 1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('should change the main carousel slide when the user clicks on a thumbnail', async () => {
    render(
      <Carousel fullScreen={true}>
        {[
          { slide: <div>slide 1</div>, thumbnail: <div>thumbnail 1</div> },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>
    );
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await userEvent.click(screen.getByLabelText('thumbnail 3 of 3'));
    expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('should change the current thumbnail when the user changes the main carousel slide', async () => {
    render(
      <Carousel fullScreen={true}>
        {[
          { slide: <div>slide 1</div>, thumbnail: <div>thumbnail 1</div> },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>
    );
    expect(screen.getByLabelText('thumbnail 1 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await userEvent.click(screen.getByLabelText('next slide'));
    expect(screen.getByLabelText('thumbnail 2 of 3')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });
});
