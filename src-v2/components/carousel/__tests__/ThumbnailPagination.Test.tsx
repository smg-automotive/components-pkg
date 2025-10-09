import React, { createRef } from 'react';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import ThumbnailPagination from '../ThumbnailPagination';

const thumbnails = [
  <div key="thumbnail-1">thumbnail 1</div>,
  <div key="thumbnail-2">thumbnail 2</div>,
  <div key="thumbnail-3">thumbnail 3</div>,
  <div key="thumbnail-4">thumbnail 4</div>,
  <div key="thumbnail-5">thumbnail 5</div>,
  <div key="thumbnail-6">thumbnail 6</div>,
  <div key="thumbnail-7">thumbnail 7</div>,
  <div key="thumbnail-8">thumbnail 8</div>,
  <div key="thumbnail-9">thumbnail 9</div>,
];

const mockSlidesNotInView = jest.fn().mockReturnValue([]);
const mockScrollProgress = jest.fn().mockReturnValue(0);
const mockScrollNext = jest.fn();
const mockScrollPrev = jest.fn();
const paginationCarousel = {
  slidesNotInView: mockSlidesNotInView,
  scrollProgress: mockScrollProgress,
  scrollNext: mockScrollNext,
  scrollPrev: mockScrollPrev,
  clickAllowed: jest.fn().mockReturnValue(true),
  on: jest.fn(),
} as unknown as UseEmblaCarouselType[1];

const mockMainScrollTo = jest.fn();
const mainCarousel = {
  scrollTo: mockMainScrollTo,
} as unknown as UseEmblaCarouselType[1];

const paginationCarouselRef = createRef<HTMLDivElement>();

describe('<ThumbnailPagination/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the thumbnails', () => {
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(screen.getByText('thumbnail 1')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 2')).toBeInTheDocument();
    expect(screen.getByText('thumbnail 3')).toBeInTheDocument();
  });

  it('should NOT show the thumbnail navigation buttons if all thumbnails are visible', () => {
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(
      screen.queryByLabelText('scroll to next thumbnail group'),
    ).toBeNull();
    expect(
      screen.queryByLabelText('scroll to previous thumbnail group'),
    ).toBeNull();
  });

  it('should show the NEXT thumbnail navigation button if some are outside the viewport on the right', () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    const slideWidth = 1 / thumbnails.length;
    mockScrollProgress.mockReturnValueOnce(slideWidth);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(
      screen.getByLabelText('scroll to next thumbnail group'),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText('scroll to previous thumbnail group'),
    ).toBeNull();
  });

  it('should show the PREVIOUS thumbnail navigation button if some are outside the viewport on the left', () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    const slideWidth = 1 / thumbnails.length;
    mockScrollProgress.mockReturnValueOnce(1 - slideWidth);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(
      screen.queryByLabelText('scroll to next thumbnail group'),
    ).toBeNull();
    expect(
      screen.getByLabelText('scroll to previous thumbnail group'),
    ).toBeInTheDocument();
  });

  it('should show BOTH thumbnail navigation buttons if some are outside the viewport on the left and on the right and scroll position is close to end', () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    const slideWidth = 1 / thumbnails.length;
    mockScrollProgress.mockReturnValueOnce(1 - slideWidth - 0.01);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(
      screen.getByLabelText('scroll to next thumbnail group'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('scroll to previous thumbnail group'),
    ).toBeInTheDocument();
  });

  it('should show BOTH thumbnail navigation buttons if some are outside the viewport on the left and on the right and scroll position close to start', () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    const slideWidth = 1 / thumbnails.length;
    mockScrollProgress.mockReturnValueOnce(slideWidth + 0.01);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    expect(
      screen.getByLabelText('scroll to next thumbnail group'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('scroll to previous thumbnail group'),
    ).toBeInTheDocument();
  });

  it('should scroll to the NEXT thumbnail group WITHOUT changing slide', async () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    mockScrollProgress.mockReturnValueOnce(0.21);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    await userEvent.click(
      screen.getByLabelText('scroll to next thumbnail group'),
    );
    await waitFor(() => expect(mockScrollNext).toHaveBeenCalledWith(true));
    expect(mockMainScrollTo).not.toHaveBeenCalled();
  });

  it('should scroll to the PREVIOUS thumbnail group WITHOUT changing slide', async () => {
    mockSlidesNotInView.mockReturnValueOnce([1, 2]);
    mockScrollProgress.mockReturnValueOnce(0.21);
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    await userEvent.click(
      screen.getByLabelText('scroll to previous thumbnail group'),
    );
    await waitFor(() => expect(mockScrollPrev).toHaveBeenCalledWith(true));
    expect(mockMainScrollTo).not.toHaveBeenCalled();
  });

  it('should change the main carousel slide when a thumbnail is clicked', async () => {
    render(
      <ThumbnailPagination
        currentSlideIndex={0}
        thumbnails={thumbnails}
        paginationCarouselRef={paginationCarouselRef}
        paginationCarousel={paginationCarousel}
        mainCarousel={mainCarousel}
      />,
    );
    await userEvent.click(screen.getByText('thumbnail 2'));
    await waitFor(() => expect(mockMainScrollTo).toHaveBeenCalledWith(1, true));
  });
});
