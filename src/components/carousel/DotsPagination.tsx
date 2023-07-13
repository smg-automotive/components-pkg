import React, { FC, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

import { useMultiStyleConfig } from '@chakra-ui/system';

import Flex from '../flex';
import Box from '../box';
import DotsPaginationButton from './DotsPaginationButton';

interface DotsPaginationProps {
  currentSlideIndex: number;
  numberOfSlides: number;
  mainCarousel?: EmblaCarouselType;
}

const DotsPagination: FC<DotsPaginationProps> = ({
  currentSlideIndex,
  numberOfSlides,
  mainCarousel,
}) => {
  const onDotsClick = useCallback(
    (index: number) => {
      if (mainCarousel) {
        mainCarousel.scrollTo(index);
      }
    },
    [mainCarousel]
  );
  const { dotsPaginationContainer } = useMultiStyleConfig('Carousel');
  const pagination = Array.from({ length: numberOfSlides }, (_, i) => i);

  return (
    <Box aria-label="Dots Pagination" __css={dotsPaginationContainer}>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {pagination.map((index) => (
          <DotsPaginationButton
            key={`slide-${index}`}
            isCurrent={index === currentSlideIndex}
            currentDot={index + 1}
            onClick={() => onDotsClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default DotsPagination;
