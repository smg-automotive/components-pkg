import React, { FC } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import Flex from '../flex';
import Box from '../box';
import DotsPaginationButton from './DotsPaginationButton';

interface Props {
  currentSlideIndex: number;
  numberOfSlides: number;
  mainCarousel?: EmblaCarouselType;
}

const NumbersDotsPagination: FC<Props> = ({
  currentSlideIndex,
  numberOfSlides,
}) => {
  const pagination = Array.from({ length: numberOfSlides }, (_, i) => i);
  const { dotsPaginationContainer } = useMultiStyleConfig('Carousel');

  return (
    <Box aria-label="Dots Pagination" __css={dotsPaginationContainer}>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {pagination.map((index) => (
          <DotsPaginationButton
            key={`slide-${index}`}
            isCurrent={index === currentSlideIndex}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default NumbersDotsPagination;
