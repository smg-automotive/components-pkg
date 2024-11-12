import React, { FC, useCallback } from 'react';

import { UseEmblaCarouselType } from 'embla-carousel-react';

import Flex from '../flex';
import Box from '../box';
import NumbersPaginationButton from './NumbersPaginationButton';

interface Props {
  currentSlideIndex: number;
  numberOfSlides: number;
  mainCarousel?: UseEmblaCarouselType[1];
}

const NumbersPagination: FC<Props> = ({
  currentSlideIndex,
  numberOfSlides,
  mainCarousel,
}) => {
  const onClick = useCallback(
    (index: number) => {
      if (mainCarousel) {
        mainCarousel.scrollTo(index);
      }
    },
    [mainCarousel],
  );
  const pagination = Array.from({ length: numberOfSlides }, (_, i) => i);

  return (
    <Box aria-label="Numbers Pagination">
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {pagination.map((index) => (
          <NumbersPaginationButton
            key={`slide-${index}`}
            isCurrent={index === currentSlideIndex}
            currentPageNumber={index + 1}
            totalNumbers={numberOfSlides}
            onClick={() => onClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default NumbersPagination;
