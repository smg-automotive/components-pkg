import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import Carousel, { PaginationType } from '../index';

jest.mock('embla-carousel-react', () => {
  const embla = jest.requireActual('embla-carousel-react');

  return {
    __esModule: true,
    default: jest.fn(embla),
  };
});

describe('<Carousel />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('triggers the onSlideEnter event on the first slide', () => {
    const mockOnEnter = jest.fn();

    render(
      <Carousel fullScreen={true}>
        {[
          {
            slide: <div>slide 1</div>,
            onSlideEnter: mockOnEnter,
            thumbnail: <div>thumbnail 1</div>,
          },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>,
    );

    return waitFor(() => expect(mockOnEnter).toHaveBeenCalled());
  });

  it('triggers the onSlideEnter event on the navigation', async () => {
    const mockOnEnter = jest.fn();
    const user = userEvent.setup();

    render(
      <Carousel fullScreen={true}>
        {[
          { slide: <div>slide 1</div>, thumbnail: <div>thumbnail 1</div> },
          {
            slide: <div>slide 2</div>,
            onSlideEnter: mockOnEnter,
            thumbnail: <div>thumbnail 2</div>,
          },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>,
    );

    await user.click(screen.getByText('thumbnail 2'));

    return waitFor(() => expect(mockOnEnter).toHaveBeenCalled());
  });

  it('triggers the onSlideLEave event on the navigation', async () => {
    const mockOnLeave = jest.fn();
    const user = userEvent.setup();

    render(
      <Carousel fullScreen={true}>
        {[
          {
            slide: <div>slide 1</div>,
            onSlideLeave: mockOnLeave,
            thumbnail: <div>thumbnail 1</div>,
          },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>,
    );

    await user.click(screen.getByText('thumbnail 2'));
    return waitFor(() => expect(mockOnLeave).toHaveBeenCalled());
  });

  it('should create the carousel in infinite mode', async () => {
    render(
      <Carousel onSlideClick={jest.fn} startIndex={2}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>,
    );
    expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
    await userEvent.hover(screen.getByLabelText('Carousel'));
    await userEvent.click(screen.getByLabelText('next slide'));
    await waitFor(() =>
      expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
        'aria-current',
        'true',
      ),
    );
    await userEvent.click(screen.getByLabelText('previous slide'));
    await waitFor(() =>
      expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
        'aria-current',
        'true',
      ),
    );
  });

  it('should use start index 0 if none has been given', () => {
    render(
      <Carousel onSlideClick={jest.fn}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>,
    );
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('should respect the start index', () => {
    render(
      <Carousel onSlideClick={jest.fn} startIndex={1}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>,
    );
    expect(screen.getByLabelText('2 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('should call the onClick handler when clicking a slide', async () => {
    const mockOnClick = jest.fn();
    render(
      <Carousel onSlideClick={mockOnClick}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>,
    );
    await userEvent.click(screen.getByText('slide 1'));
    await waitFor(() => expect(mockOnClick).toHaveBeenCalledWith(0));
  });

  it('should have thumbnails on the fullscreen gallery', () => {
    render(
      <Carousel fullScreen={true}>
        {[
          { slide: <div>slide 1</div>, thumbnail: <div>thumbnail 1</div> },
          { slide: <div>slide 2</div>, thumbnail: <div>thumbnail 2</div> },
          { slide: <div>slide 3</div>, thumbnail: <div>thumbnail 3</div> },
        ]}
      </Carousel>,
    );
    expect(screen.getByText('thumbnail 1')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 2')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 3')).toBeInTheDocument();
    expect(screen.getByLabelText('thumbnail 1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('should have numbers pagination', () => {
    render(
      <Carousel paginationType={PaginationType.Number}>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
      </Carousel>,
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByLabelText('numbers pagination 1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
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
      </Carousel>,
    );
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
    await userEvent.click(screen.getByLabelText('thumbnail 3 of 3'));
    await waitFor(() =>
      expect(screen.getByLabelText('3 of 3')).toHaveAttribute(
        'aria-current',
        'true',
      ),
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
      </Carousel>,
    );
    expect(screen.getByLabelText('thumbnail 1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
    await userEvent.click(screen.getByLabelText('next slide'));
    await waitFor(() =>
      expect(screen.getByLabelText('thumbnail 2 of 3')).toHaveAttribute(
        'aria-current',
        'true',
      ),
    );
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
      </Carousel>,
    );

    expect(screen.queryByLabelText('Carousel')).toBeNull();
    expect(screen.getByLabelText('2 of 3')).toHaveAttribute(
      'aria-current',
      'true',
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
      </Carousel>,
    );

    expect(screen.getByLabelText('Carousel')).toBeInTheDocument();
    expect(screen.getByLabelText('1 of 3')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });
});
