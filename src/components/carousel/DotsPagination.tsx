import React, { FC } from 'react';

import { useSlotRecipe } from '@chakra-ui/react';

import { Flex } from '../flex';
import { Box } from '../box';
import { DotsPaginationIndicator } from './DotsPaginationIndicator';

interface Props {
  currentSlideIndex: number;
  numberOfSlides: number;
}

export const DotsPagination: FC<Props> = ({
  currentSlideIndex,
  numberOfSlides,
}) => {
  const pagination = Array.from({ length: numberOfSlides }, (_, i) => i);
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe();

  return (
    <Box aria-label="Dots Pagination" css={styles.dotsPaginationContainer}>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {pagination.map((index) => (
          <DotsPaginationIndicator
            key={`slide-${index}`}
            isCurrent={index === currentSlideIndex}
          />
        ))}
      </Flex>
    </Box>
  );
};
