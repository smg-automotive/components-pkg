import React from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import NumbersPagination from '../NumbersDotsPagination';
import { PaginationType } from '..';

const mockMainScrollTo = jest.fn();
const mainCarousel = {
  scrollTo: mockMainScrollTo,
} as unknown as EmblaCarouselType;

describe('<NumbersPagination />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the numbers pagination', () => {
    render(
      <NumbersPagination
        currentSlideIndex={0}
        numberOfSlides={5}
        mainCarousel={mainCarousel}
        paginationType={PaginationType.Number}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should change the main carousel slide when a numbers button is clicked', async () => {
    render(
      <NumbersPagination
        currentSlideIndex={0}
        numberOfSlides={5}
        mainCarousel={mainCarousel}
        paginationType={PaginationType.Number}
      />
    );
    userEvent.click(screen.getByText('2'));
    await waitFor(() => expect(mockMainScrollTo).toHaveBeenCalledWith(1));
  });
});
