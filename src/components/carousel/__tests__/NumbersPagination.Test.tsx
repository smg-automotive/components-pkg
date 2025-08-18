import React from 'react';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import NumbersPagination from '../NumbersPagination';

const mockMainScrollTo = jest.fn();
const mainCarousel = {
  scrollTo: mockMainScrollTo,
} as unknown as UseEmblaCarouselType[1];

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
      />,
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
      />,
    );
    await userEvent.click(screen.getByText('2'));
    await waitFor(() => expect(mockMainScrollTo).toHaveBeenCalledWith(1));
  });
});
