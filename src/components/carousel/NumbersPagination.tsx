import React, { FC, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

import Flex from '../flex';
import Box from '../box';
import NumbersPaginationButton from './NumbersPaginationButton';

interface Props {
  currentSlideIndex: number;
  numbers: number[];
  mainCarousel?: EmblaCarouselType;
}

const NumbersPagination: FC<Props> = ({
  currentSlideIndex,
  numbers,
  mainCarousel,
}) => {
  const onNumbersClick = useCallback(
    (index: number) => {
      if (mainCarousel) {
        mainCarousel.scrollTo(index);
      }
    },
    [mainCarousel]
  );

  return (
    <Box aria-label="Numbers Pagination">
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {numbers.map((index) => (
          <NumbersPaginationButton
            key={`slide-${index}`}
            isCurrent={index === currentSlideIndex}
            numbersIndex={index}
            totalNumbers={numbers.length}
            onClick={() => onNumbersClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default NumbersPagination;
