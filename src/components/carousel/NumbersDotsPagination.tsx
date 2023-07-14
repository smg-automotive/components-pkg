import React, { FC, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import Flex from '../flex';
import Box from '../box';
import NumbersPaginationButton from './NumbersPaginationButton';
import DotsPaginationButton from './DotsPaginationButton';

type PaginationType = 'dot' | 'number';

interface Props {
  currentSlideIndex: number;
  numberOfSlides: number;
  mainCarousel?: EmblaCarouselType;
  paginationType: PaginationType;
}

const NumbersDotsPagination: FC<Props> = ({
  currentSlideIndex,
  numberOfSlides,
  mainCarousel,
  paginationType,
}) => {
  const onClick = useCallback(
    (index: number) => {
      if (mainCarousel) {
        mainCarousel.scrollTo(index);
      }
    },
    [mainCarousel]
  );
  const pagination = Array.from({ length: numberOfSlides }, (_, i) => i);
  const { dotsPaginationContainer } = useMultiStyleConfig('Carousel');

  const renderPagination = (type: PaginationType) => {
    switch (type) {
      case 'dot':
        return (
          <Box aria-label="Dots Pagination" __css={dotsPaginationContainer}>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {pagination.map((index) => (
                <DotsPaginationButton
                  key={`slide-${index}`}
                  isCurrent={index === currentSlideIndex}
                  currentDot={index + 1}
                  totalDots={numberOfSlides}
                />
              ))}
            </Flex>
          </Box>
        );
      case 'number':
        return (
          <Box aria-label="Numbers Pagination">
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
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
      default:
        return null;
    }
  };

  return renderPagination(paginationType);
};

export default NumbersDotsPagination;
